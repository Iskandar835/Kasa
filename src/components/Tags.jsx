import styled from 'styled-components'
import PropTypes from 'prop-types'


const Tags = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 115px;
    height: 25px;
    padding: 0 5px;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
    white-space: nowrap;
    background: #FF6060;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 84px;
        height: 18px;
        padding: 0;  
        font-size: 10px;
        border-radius: 5px;
    }
`
function AllTags({ content }) {
    return(
        <>
            <Tags>{content}</Tags>
        </>
    )
}

AllTags.propTypes = {
    content: PropTypes.string,
}

export default AllTags