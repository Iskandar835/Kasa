import styled, { css } from "styled-components"
import { useState } from 'react'
import PropTypes from "prop-types"


// All the variable for the Banner on homepage and about 
export const BannerContainer = styled.div`
    position: relative;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 223px; 
    border-radius: 25px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); 
    }

    @media (max-width: 768px) {
        justify-content: flex-start;
        height: 110px;
        border-radius: 10px;
        box-shadow: none;
    }
`
export const BannerImg = styled.img`
    width: 100%;    
    height: 100%;
    object-fit: cover;
`
// *****************************************************


// This atom is the generic dropdown used in various places on the site
const Dropdown = styled.div`
    width: 100%;
`
const TitleAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 10px 15px;
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  background: #FF6060;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`
const IconButton = styled.i`
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  ${({ $rotated }) =>
    $rotated &&
    css`
      transform: rotate(180deg);
    `}

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const ContentSlideDown = styled.div`
  padding: 0 20px;
  color: #000000;
  background: #F6F6F6;
  border-radius: 5px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 250ms ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      max-height: 200px;
      padding: 0 20px;
    `}
`
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

function TheDropdown( { title, content }) {
    const [isActive, setIsActive] = useState(false);
    function handleToggle() {
      setIsActive((prevIsActive) => !prevIsActive)
    }
  
  return (
    <Dropdown>
      <TitleAndIcon>
        {title}
        <IconButton
          className="fa-solid fa-chevron-up"
          $rotated={isActive}
          onClick={handleToggle}
        />
      </TitleAndIcon>
      <ContentSlideDown $isActive={isActive}>
        <Text>{content}</Text>
      </ContentSlideDown>
    </Dropdown>
   )
}

TheDropdown.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

export default TheDropdown
// *****************************************************************

export const Break = styled.br`
`