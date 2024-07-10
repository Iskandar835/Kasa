import styled from 'styled-components'
import PropTypes from 'prop-types'


const Card = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 340px;
    background-color: #FF6060;
    border-radius: 10px;
    
    @media (max-width: 768px) {
        height: 255px;
    }
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const CardText = styled.h2`
    position: absolute;
    margin-left: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
`

function CardAlone({ cover, title }) {
    return(
        <Card>
            <CardImg src={cover} />
            <CardText>{title}</CardText>
        </Card>
    )
}

CardAlone.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default CardAlone