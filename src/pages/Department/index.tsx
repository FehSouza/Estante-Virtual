import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import { DepartmentContainer, DepartmentContainerSkeleton, Pagination, PaginationSkeleton } from '../../components'
import { OrderBy } from '../../components/OrderBy'
import { LIMIT_PAGES, LITERARY_GENRES_MAP, TOTAL_PRODUCTS_PER_PAGE } from '../../dictionary'
import { getBooksDepartment } from '../../services'
import * as S from './styles'

export const Department = ({ category }: { category?: string }) => {
  const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter')
  const page = searchParams.get('page')

  Number(page) <= LIMIT_PAGES ? page : setSearchParams(new URLSearchParams({ page: String(LIMIT_PAGES) }))

  const initial = page ? Number(page) * TOTAL_PRODUCTS_PER_PAGE - TOTAL_PRODUCTS_PER_PAGE : 0

  const term = category ? `subject:${category}` : String(params.search)

  const { data: filters } = useSWR(`api/books-department/${term}`, () =>
    getBooksDepartment({ nameDepartment: term, orderBySelected: orderSelected[0], initial: 0, maxResults: 20, author: undefined })
  )

  const {
    data: booksDepartment,
    mutate,
    isLoading,
  } = useSWR(`api/books-department/${term}/${filter ?? ''}/${initial}`, () =>
    getBooksDepartment({
      nameDepartment: term,
      orderBySelected: orderSelected[0],
      initial: initial,
      maxResults: 20,
      author: filter ?? undefined,
    })
  )

  const [orderSelected, setOrderSelected] = useState(['relevance', 'Mais vendidos'])

  const realTotalProducts = booksDepartment?.totalItems ?? 0
  const totalProducts = realTotalProducts <= 512 ? realTotalProducts : 512

  if (!isLoading && !booksDepartment?.items) {
    return (
      <S.Department>
        <S.DepartmentName>{LITERARY_GENRES_MAP[term as keyof typeof LITERARY_GENRES_MAP] ?? term}</S.DepartmentName>

        <S.DepartmentFilters>
          <S.TotalProducts>Nenhum produto encontrado</S.TotalProducts>
        </S.DepartmentFilters>
      </S.Department>
    )
  }

  return (
    <S.Department>
      <S.DepartmentName>{LITERARY_GENRES_MAP[term as keyof typeof LITERARY_GENRES_MAP] ?? term}</S.DepartmentName>

      <S.DepartmentFilters>
        {booksDepartment ? (
          <S.TotalProducts>{totalProducts > 1 ? `${totalProducts} produtos` : `${totalProducts} produto`}</S.TotalProducts>
        ) : (
          <S.TotalProductsSkeleton />
        )}

        <OrderBy orderSelected={orderSelected} setOrderSelected={setOrderSelected} mutate={mutate} />
      </S.DepartmentFilters>

      {booksDepartment ? <DepartmentContainer books={booksDepartment} filters={filters} /> : <DepartmentContainerSkeleton />}

      {booksDepartment ? <Pagination totalProducts={realTotalProducts} initialPage={Number(page)} /> : <PaginationSkeleton />}
    </S.Department>
  )
}
