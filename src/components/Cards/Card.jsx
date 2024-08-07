import styled from 'styled-components'
import PropTypes from 'prop-types'


const Card = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 340px;
    border-radius: 10px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%);
    }
    
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
    margin: 15px 20px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
`

function CardAlone({ cover, title }) {
    return(
        <Card>
            <CardImg src={cover} alt='Photo du bien en location'/>
            <CardText>{title}</CardText>
        </Card>
    )
}

CardAlone.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default CardAlone