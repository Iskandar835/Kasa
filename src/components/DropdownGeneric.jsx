import styled, { css } from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'


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
  overflow: auto;
  height: 0;
  transition: height 250ms ease-in-out;


  ${({ $isActive }) => 
    $isActive &&
    css`
      height: 200px;
      padding: 0 20px;
    `
  }
`
const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
function TheDropdown({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(prevIsActive => !prevIsActive);
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
      <ContentSlideDown
        $isActive={isActive}>
        <Text>{content}</Text>
      </ContentSlideDown>
    </Dropdown>
  );
}

TheDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};

export default TheDropdown;