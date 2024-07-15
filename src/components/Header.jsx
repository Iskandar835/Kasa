
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

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
`;

const HeaderLogo = styled.img`
  width: 210px;
  height: 68px;

  @media (max-width: 768px) {
    width: 145px;
    height: 47px;
    margin-right: 10px;
  }
`;

const NavContent = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const StyledHeaderLink = styled(Link)`
  font-size: 24px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
    text-transform: uppercase;
  }


  ${({ isclicked }) => isclicked && `
    text-decoration: underline;
  `}
`;

function Header() {
  const [clickedLink, setClickedLink] = useState('null');

  const handleClick = (link) => {
    setClickedLink(link);
  };

  return (
    <HeaderSection>
      <Link to="/" onClick={() => handleClick('link1')}>
        <HeaderLogo src={Logo} alt="Logo" />
      </Link>
      <NavContent>
        <StyledHeaderLink to="/" isclicked={clickedLink === 'link1' ? 'true' : 'false'} onClick={() => handleClick('link1')}>
          Accueil
        </StyledHeaderLink>
        <StyledHeaderLink to="/apropos" isclicked={clickedLink === 'link2' ? 'true' : 'false'} onClick={() => handleClick('link2')}>
          A propos
        </StyledHeaderLink>
      </NavContent>
    </HeaderSection>
  );
}

export default Header;

