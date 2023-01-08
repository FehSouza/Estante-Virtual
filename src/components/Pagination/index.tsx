import { useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import * as S from './styles'

interface PaginationProps {
  totalProducts: number
}

const FIRST_PAGE = 1

export const Pagination = ({ totalProducts }: PaginationProps) => {
  const [currencyPage, setCurrencyPage] = useState(1)

  const totalProductsPerPage = 16
  const totalPages = Math.ceil(totalProducts / totalProductsPerPage)

  const pages = new Array(totalPages >= 5 ? 5 : totalPages).fill(null).map((_, i) => i + 1)
  const numberOfPages = pages.length

  const pagination = pages.map((page) => {
    if (currencyPage <= 3) return page

    if (currencyPage - 2 + numberOfPages > totalPages) return page + totalPages - numberOfPages

    return currencyPage + page - 3
  })

  const handlePrevPage = () => {
    if (currencyPage === 1) return
    setCurrencyPage((prev) => prev - 1)
  }

  const handleNextPage = () => {
    if (currencyPage === totalPages) return
    setCurrencyPage((prev) => prev + 1)
  }

  const handleSelectPage = (page: number) => {
    if (page === currencyPage) return
    setCurrencyPage(page)
  }

  const prevPageDisabled = currencyPage <= FIRST_PAGE
  const nextPageDisabled = currencyPage >= totalPages

  return (
    <S.PaginationWrapper>
      <S.ArrowPage onClick={handlePrevPage} disabled={prevPageDisabled}>
        <GrFormPrevious size={26} />
      </S.ArrowPage>

      {currencyPage > 3 && <S.PageFixed onClick={() => handleSelectPage(FIRST_PAGE)}>{`${FIRST_PAGE} ...`}</S.PageFixed>}

      {pagination.map((page) => (
        <S.Page key={page} currency={page === currencyPage} onClick={() => handleSelectPage(page)}>
          {page}
        </S.Page>
      ))}

      {totalPages - currencyPage > 2 && <S.PageFixed onClick={() => handleSelectPage(totalPages)}>{`... ${totalPages}`}</S.PageFixed>}

      <S.ArrowPage className="next" onClick={handleNextPage} disabled={nextPageDisabled}>
        <GrFormPrevious size={26} />
      </S.ArrowPage>
    </S.PaginationWrapper>
  )
}
