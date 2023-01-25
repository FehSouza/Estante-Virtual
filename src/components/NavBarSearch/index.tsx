import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { searchClose } from '../../states'
import * as S from './styles'

export const NavBarSearch = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    document.addEventListener('click', searchClose)
    return () => document.removeEventListener('click', searchClose)
  }, [])

  const handleSearch = () => {
    if (value.length <= 3) return
    navigate(`/livros/${value}`)
    setValue('')
    searchClose()
  }

  const handleValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return handleSearch()
    setValue(e.currentTarget.value)
  }

  return (
    <S.NavBarSearch onClick={(e) => e.stopPropagation()}>
      <S.Input autoFocus placeholder="O que você está buscando?" onKeyUp={(e) => handleValue(e)}></S.Input>

      <S.Search onClick={handleSearch}>
        <BsSearch />
      </S.Search>
    </S.NavBarSearch>
  )
}
