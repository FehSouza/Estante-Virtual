import { useMemo } from 'react'
import { MdFilterList } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'
import { BooksResponseProps } from '../../@types'
import { DepartmentBook } from '../DepartmentBook'
import * as S from './styles'

interface ContainerDepartmentProps {
  books: { items: BooksResponseProps[]; totalItems: number }
  filters: { items: BooksResponseProps[]; totalItems: number } | undefined
}

export const DepartmentContainer = ({ books, filters }: ContainerDepartmentProps) => {
  const [_, setSearchParams] = useSearchParams()

  const authorList = useMemo(() => {
    if (!filters) return []

    const authorListFormatted = filters.items.map((book: BooksResponseProps) => book.volumeInfo.authors?.[0] ?? '')
    return Array.from(new Set(authorListFormatted)).sort()
  }, [filters])

  const booksList = useMemo(() => {
    if (!books) return []
    return books.items
  }, [books])

  return (
    <S.Container>
      <S.Filter>
        <S.Title>
          <MdFilterList size={24} />
          Filtros
        </S.Title>

        <S.FilterTitle>Autores</S.FilterTitle>
        {authorList.map((author) => {
          if (!author) return null
          return (
            <S.AuthorName onClick={() => setSearchParams(new URLSearchParams({ filter: author }))} key={author}>
              {author}
            </S.AuthorName>
          )
        })}
      </S.Filter>

      <S.BooksContainer>
        {booksList?.map((book: BooksResponseProps) => (
          <DepartmentBook key={book.id} book={book} />
        ))}
      </S.BooksContainer>
    </S.Container>
  )
}
