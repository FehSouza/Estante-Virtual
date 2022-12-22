import useSWR from 'swr'
import { BooksResponseProps } from '../../@types'
import { ENABLE_MOCK } from '../../api'
import { getBooksDepartment } from '../../services'
import * as S from './styles'
import { useState } from 'react'

export const Department = ({ category }: { category: string }) => {
  const { data: booksDepartment } = useSWR('api/books-department', () =>
    getBooksDepartment({ nameDepartment: category, initialElement: 0, finalElement: 16 })
  )

  const [currentPage, setCurrentPage] = useState(2)

  const [showOrderBy, setShowOrderBy] = useState(false)

  const booksList = ENABLE_MOCK ? booksDepartment : booksDepartment.items
  const totalProducts = ENABLE_MOCK ? 22 : booksDepartment.totalItems
  const totalProductsPerPage = 16
  const totalPages = Math.ceil(totalProducts / totalProductsPerPage)

  console.log(totalProducts % totalProductsPerPage)
  return (
    <S.Department>
      <S.DepartmentName>{category}</S.DepartmentName>

      <S.DepartmentFilters>
        <S.TotalProducts>{totalProducts > 1 ? `${totalProducts} produtos` : `${totalProducts} produto`}</S.TotalProducts>

        <S.OrderWrapper>
          <S.OrderTitle>Ordenar por:</S.OrderTitle>
          <S.OrderSelector onClick={() => setShowOrderBy((prev) => !prev)} />
          {showOrderBy && (
            <S.OrderOptions>
              <S.OrderOption>Mais vendidos</S.OrderOption>
              <S.OrderOption>Mais recentes</S.OrderOption>
            </S.OrderOptions>
          )}
        </S.OrderWrapper>
      </S.DepartmentFilters>

      {/* {booksDepartment &&
        booksList.map((book: BooksResponseProps) => {
          return <div>{book.volumeInfo.title}</div>
        })} */}
    </S.Department>
  )
}
