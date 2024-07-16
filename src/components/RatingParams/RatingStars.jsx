import styled from 'styled-components'
import PropTypes from 'prop-types'
import Star from './Star'


const RatingDiv = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 768px) {
        align-items: center;
        gap: 5px;
    }
`
function StarRating({ rating }) {
    const maxStars = 5
    const stars = []

    for (let i = 0; i < maxStars; i++) {
        stars.push(<Star key={i} isFilled={i < rating} />)
    }

    return <RatingDiv>{stars}</RatingDiv>
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
}

export default StarRating