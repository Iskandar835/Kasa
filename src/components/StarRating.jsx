import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({ rating }) => {
    const maxStars = 5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
        stars.push(<Star key={i} isFilled={i < rating} />);
    }

    return <div>{stars}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarRating;