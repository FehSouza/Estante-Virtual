import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import { DepartmentContainer, DepartmentContainerSkeleton } from '../../components'
import { OrderBy } from '../../components/OrderBy'
import { getBooksDepartment } from '../../services'
import * as S from './styles'

export const Department = ({ category }: { category: string }) => {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  const { data: filters } = useSWR(`api/books-department/${category}`, () =>
    getBooksDepartment({ nameDepartment: category, orderBySelected: orderSelected[0], initialElement: 0, finalElement: 16, author: null })
  )

  const { data: booksDepartment, mutate } = useSWR(`api/books-department/${category}/${filter ?? ''}`, () =>
    getBooksDepartment({ nameDepartment: category, orderBySelected: orderSelected[0], initialElement: 0, finalElement: 16, author: filter })
  )

  const [orderSelected, setOrderSelected] = useState(['relevance', 'Mais vendidos'])

  const totalProducts = booksDepartment?.totalItems ?? 0
  // const totalProductsPerPage = 16
  // const totalPages = Math.ceil(totalProducts / totalProductsPerPage)

  return (
    <S.Department>
      <S.DepartmentName>{category}</S.DepartmentName>

      <S.DepartmentFilters>
        {booksDepartment ? (
          <S.TotalProducts>{totalProducts > 1 ? `${totalProducts} produtos` : `${totalProducts} produto`}</S.TotalProducts>
        ) : (
          <S.TotalProductsSkeleton />
        )}

        <OrderBy orderSelected={orderSelected} setOrderSelected={setOrderSelected} mutate={mutate} />
      </S.DepartmentFilters>

      {booksDepartment ? <DepartmentContainer books={booksDepartment} filters={filters} /> : <DepartmentContainerSkeleton />}
    </S.Department>
  )
}
