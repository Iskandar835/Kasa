import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ErrorSection = styled.section`
    padding: 40px 30px 140px 30px;
    text-align: center;
    color: #FF6060;

    @media (max-width: 768px) {
        padding: 80px 20px 115px 20px;
    }
`
const ErrorTitle = styled.h1`
    font-size: 288px;
    font-weight: 700;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 96px;
    }
`
const ErrorText = styled.p`
    margin: 100px 0 145px 0;    
    font-size: 36px;
    
    @media (max-width: 768px) {
        margin: 105px 0 115px 0;    
        font-size: 18px;
    }
`
const Span = styled.span`
    @media (max-width: 768px) {
        display: block;
    }
`
const ReturnLink = styled(Link)`
    font-size: 18px;
    color: #000000;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

function Error() {
    return (
        <ErrorSection>
            <ErrorTitle>404</ErrorTitle>
            <ErrorText>Oups! La page que <Span>vous demandez n&apos;existe pas.</Span></ErrorText>
            <ReturnLink to="/">
                Retourner sur la page d&apos;accueil
            </ReturnLink>
        </ErrorSection>
    )
}

export default Error