import styled from 'styled-components'
import PropTypes from 'prop-types'


const Picture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100%;
    object-fit: cover;
    
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`

function ProfilPicture({ image }) {
    return(
        <>
            <Picture src={image} alt='Photo de profil'/>
        </>
    )
}

ProfilPicture.propTypes = {
    image: PropTypes.string,
}

export default ProfilPicture