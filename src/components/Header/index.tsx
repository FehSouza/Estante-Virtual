import { BsHandbag, BsPerson, BsSearch } from 'react-icons/bs'
import { GiBookshelf } from 'react-icons/gi'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo to="/">
          <GiBookshelf />
          <S.Name>Estante Virtual</S.Name>
        </S.Logo>

        <S.NavBar>
          <S.DepartmentName to="/livros/ficcao-cientifica">Ficção Científica</S.DepartmentName>
          <S.DepartmentName to="/livros/fantasia">Fantasia</S.DepartmentName>
          <S.DepartmentName to="/livros/poesia">Poesia</S.DepartmentName>
          <S.DepartmentName to="/livros/policial">Policial</S.DepartmentName>
          <S.DepartmentName to="/livros/romance">Romance</S.DepartmentName>
          <S.DepartmentName to="/livros/suspense">Suspense</S.DepartmentName>
          <S.DepartmentName to="/livros/terror">Terror</S.DepartmentName>
          <S.Search>
            <BsSearch />
          </S.Search>
        </S.NavBar>

        <S.UserMenu>
          <S.MiniCart>
            <S.MiniCartInt>
              <BsHandbag />
            </S.MiniCartInt>
          </S.MiniCart>

          <S.Login>
            <BsPerson />
          </S.Login>
        </S.UserMenu>
      </S.Container>
    </S.Header>
  )
}
