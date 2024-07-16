import styled, { css } from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse, TitleAndIcon, IconButton, ContentSlideDown, Text } from './CollapseGeneric'


const NewContentSlideDown = styled(ContentSlideDown)`
  max-height: none;
  height: 0;
  overflow: auto;
  transition: height 250ms ease-in-out;
  
  ${({ $isActive }) => 
    $isActive &&
    css`
      max-height: none;
      height: 230px;

      @media (max-width: 768px) {
        height: 150px;
      }
    `
  }
`
const NewTitleAndIcon = styled(TitleAndIcon)`
  font-size: 18px;
`
const NewText = styled(Text)`
  margin-top: 28px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`

function CollapseAccomodation({ title, content }) {
    const [isActive, setIsActive] = useState(false)
    const handleToggle = () => {
      setIsActive(prevIsActive => !prevIsActive)
    }
  
    return (
      <Collapse>
        <NewTitleAndIcon>
          {title}
          <IconButton
            className="fa-solid fa-chevron-up"
            $rotated={isActive}
            onClick={handleToggle}
          />
        </NewTitleAndIcon>
        <NewContentSlideDown $isActive={isActive}>
          <NewText>{content}</NewText>
        </NewContentSlideDown>
      </Collapse>
    )
  }
  
  CollapseAccomodation.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
  }
  
export default CollapseAccomodation