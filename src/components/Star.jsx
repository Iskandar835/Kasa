import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledIcon = styled.i`
  font-size: 24px;
  color: ${props => (props.$isFilled ? '#FF6060' : '#E3E3E3')}; 

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
function Star({ isFilled }) {
  return(
    <StyledIcon className="fa-solid fa-star" $isFilled={isFilled} />
  ) 
}

Star.propTypes = {
  isFilled: PropTypes.bool.isRequired,
}

export default Star;