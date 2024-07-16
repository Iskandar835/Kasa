import styled, { css } from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'


export const Collapse = styled.div`
    width: 100%;
`
export const TitleAndIcon = styled.div`
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
export const IconButton = styled.i`
  font-size: 24px;
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
export const ContentSlideDown = styled.div`
  max-height: 0;
  padding: 0 20px;
  color: #000000;
  background: #F6F6F6;
  border-radius: 5px;
  overflow: hidden;
  transition: max-height 250ms ease-in-out;

  ${({ $isActive }) => 
    $isActive &&
    css`
      max-height: 200px;
      padding: 0 20px;
    `
  }
`
export const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`

function TheCollapse({ title, content }) {
  const [isActive, setIsActive] = useState(false)
  const handleToggle = () => {
    setIsActive(prevIsActive => !prevIsActive)
  }

  return (
    <Collapse>
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
    </Collapse>
  )
}

TheCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
}

export default TheCollapse