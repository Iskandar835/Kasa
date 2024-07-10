import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.png'



const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 45px 100px;

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 30px;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`
const HeaderLogo = styled.img`
    width: 210px;
    height: 68px;

    @media (max-width: 768px) {
        width: 145px;
        height: 47px;
        margin-right: 10px;
  }
`
const NavContent = styled.nav`
    display: flex;
    align-items: center;
    gap: 60px;

    @media (max-width: 768px) {
        gap: 25px;
  }
`
const HeaderLink = styled(Link)`
    font-size: 24px;
    color: #000000;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 12px;
        text-transform: uppercase;
  }
`

function Header() {
    return (
      <HeaderSection>
          <Link to="/">
            <HeaderLogo src= {Logo} />
          </Link>
          <NavContent>
            <HeaderLink to="/">
              Accueil
            </HeaderLink>
            <HeaderLink to="/apropos">
              A propos
            </HeaderLink>
          </NavContent>
      </HeaderSection>
    )
}

export default Header