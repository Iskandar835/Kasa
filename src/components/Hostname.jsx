import styled from 'styled-components'
import PropTypes from 'prop-types' 


const NameAndSurname = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: #FF6060;
    text-align: right;

     @media (max-width: 768px) {
        font-size: 12px;
    }
`
const Name = styled.p`
    margin: 0;
   
`
const Surname = styled.p`
    margin: 0;
   
`

function Hostname ({ fullName }) {
    const [firstName, lastName] = fullName.split(' ');

    return (
        <NameAndSurname>
            <Name>{firstName}</Name>
            <Surname>{lastName}</Surname>
        </NameAndSurname>
    )
}

Hostname.propTypes = {
    fullName: PropTypes.string,
}

export default Hostname