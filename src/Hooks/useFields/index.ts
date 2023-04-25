import { useCallback, useEffect, useMemo, useState } from 'react'
import { ObjectKeys, ObjectValues, emptyFunction, entries } from '../../utils'
import { useMountedState } from '../useMountedState'

const dummyFormatter = <T>(value: T) => value

type Formatters<T> = { readonly [K in keyof T]?: (value: T[K]) => T[K] }
type ReturnTransform<T> = { readonly [K in keyof T]: T[K] extends (value: any) => infer R ? R : unknown }
type TransformerFields<T, S extends Record<keyof S, any>> = {
  [K in keyof T]?: (value: T[K]) => undefined extends S[K] ? any : S[K]
}

type FieldsBase = Record<string, any>

export interface FieldError {
  error: true
  message?: string
  ignore?: boolean
}

export interface FieldValid {
  error: false
  message?: string
}

type Validators<T> = { readonly [K in keyof T]?: (value: T[K], fields: T) => FieldError | void | undefined | false }
type OnError = <T extends FieldsBase>(error: Validation<T>, fields: T) => void
type OnErrors<T> = { readonly [K in keyof T]?: (error: FieldError, fields: T[K]) => void }
type OnEachErrors<T> = (error: FieldError, fields: T[keyof T]) => void

export type FiledValidator<T, K extends keyof T = keyof T> = (value: T[K], fields: T) => FieldError | void | undefined | false

const isError = (value: FieldError | FieldValid) => {
  if (typeof value === 'object' && value.error) return true
  return false
}

const isErrorWithIgnore = (value: FieldError | FieldValid) => {
  if (typeof value === 'object' && value.error && !value.ignore) return true
  return false
}

type Validation<T extends FieldsBase> = { [K in keyof T]: FieldError | FieldValid }

const hasErrorFn = (value: Record<string, FieldError | FieldValid>) => {
  return ObjectValues(value).some(isError)
}

const hasErrorWithIgnore = (value: Record<string, FieldError | FieldValid>) => {
  return ObjectValues(value).some(isErrorWithIgnore)
}

const runFormatter = <T extends FieldsBase>(fields: T, formatters?: Formatters<T>) => {
  const keys = ObjectKeys(fields)
  const formatted = keys.reduce((acc, key) => {
    const formatter = formatters?.[key] ?? (<T>(value: T) => value)
    const formattedValue = formatter(fields[key])
    return { ...acc, [key]: formattedValue }
  }, {})
  return formatted as { [K in keyof T]: T[K] }
}

const runValidation = <T extends FieldsBase>({
  fields,
  validators,
  shouldValidate = true,
  onValid,
  onError,
  onErrors,
  onEachError,
  formatters,
}: {
  fields: T
  shouldValidate?: boolean
  validators?: Validators<T>
  onValid?: () => void
  onError?: OnError
  onErrors?: OnErrors<T>
  onEachError?: OnEachErrors<T>
  formatters?: Formatters<T>
}) => {
  const keys = ObjectKeys(fields)
  const validatedValue = keys.reduce((acc, key) => {
    if (!shouldValidate) return { ...acc, [key]: { error: false } }
    const formatter = formatters?.[key] ?? (<T>(value: T) => value)
    const formattedValue = formatter(fields[key]) as T[keyof T]
    const validator = validators?.[key] ?? emptyFunction
    const validation = validator(formattedValue, fields)
    if (typeof validation === 'object' && 'error' in validation) {
      onErrors?.[key]?.(validation, formattedValue)
      onEachError?.(validation, formattedValue)
      return { ...acc, [key]: validation }
    }
    return { ...acc, [key]: { error: false } }
  }, {})
  const hasError = hasErrorFn(validatedValue)
  if (!hasError && shouldValidate) onValid?.()
  if (hasError) onError?.(validatedValue as Validation<T>, fields)
  return validatedValue as { [K in keyof Validation<T>]: Validation<T>[K] }
}

export const useFields = <
  Fields extends FieldsBase,
  TransformedType extends Record<keyof Fields, any> | unknown = unknown,
  Transformers extends TransformerFields<Fields, TransformedType> = TransformerFields<Fields, TransformedType>,
  Field extends keyof Fields = keyof Fields
>({
  initialValues,
  formatters = {} as Formatters<Fields>,
  transformers = {} as Transformers,
  resetValues = {},
  validators = {},
  validateOnMount = false,
  shouldValidate: _shouldValidate = true,
  onValid = emptyFunction,
  onError = emptyFunction,
  onErrors = {} as OnErrors<Fields>,
  onEachError,
}: {
  initialValues: Fields
  resetValues?: Partial<Fields>
  formatters?: Formatters<Fields>
  transformers?: Transformers
  validators?: Validators<Fields>
  validateOnMount?: boolean
  shouldValidate?: boolean
  onValid?: () => void
  onError?: OnError
  onErrors?: OnErrors<Fields>
  onEachError?: OnEachErrors<Fields>
}) => {
  const getMounted = useMountedState()
  const [shouldValidate, setShouldValidate] = useState(_shouldValidate)
  const [fields, setFields] = useState(runFormatter(initialValues, formatters))
  const [validation, setValidation] = useState(
    runValidation({
      fields: initialValues,
      validators,
      shouldValidate: validateOnMount,
      onErrors,
      onEachError,
      onValid,
      onError,
      formatters,
    })
  )

  const update = <T extends Field>(field: T, value: Fields[T]) => setFields((prev) => ({ ...prev, [field]: value }))
  const reset = () => setFields({ ...initialValues, ...resetValues })

  const setField = <T extends Field>(field: T, value: Fields[T]) => {
    const formatter = formatters?.[field] ?? dummyFormatter
    const formattedValue = formatter(value) as Fields[T]
    update(field, formattedValue)
  }

  const validate = useCallback(() => {
    const result = runValidation({ fields, validators, onErrors, onEachError, onValid, onError })
    setShouldValidate(true)
    setValidation(result)
    return result
  }, [fields, validators, onValid, onErrors])

  useEffect(() => {
    if (getMounted() && shouldValidate) validate()
  }, [fields, getMounted])

  const transformedFields = useMemo(() => {
    return entries(transformers).reduce((acc, [field, transformer]) => {
      const value = fields[field as Field]
      if (transformer === undefined || transformer === null) return acc
      return { ...acc, [field]: transformer(value) }
    }, {} as ReturnTransform<Transformers>)
  }, [transformers, fields])

  const transformed = useMemo(
    () =>
      ({ ...fields, ...transformedFields } as {
        [K in Field]: Transformers[K] extends (value: any) => infer R ? R : Fields[K]
      }),
    [fields, transformedFields]
  )

  const isValid = useMemo(
    () => !hasErrorWithIgnore(runValidation({ fields, validators })),
    [fields, validators, onValid, onError, onErrors, onEachError]
  )

  const hasError = useMemo(() => hasErrorFn(validation), [validation])

  return { fields, transformed, validation, hasError, isValid, validate, setField, reset }
}
