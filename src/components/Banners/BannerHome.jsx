import styled from 'styled-components'
import { BannerContainer } from '../../style/atoms'
import { BannerImg } from '../../style/atoms'
import Image from '../../assets/image_accueil.png' 


const BannerSection = styled.section`
    margin: 0 100px 45px 100px;
    
    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 30px 45px 30px;
    }

    @media (max-width: 768px) {
        margin: 0 20px 20px 20px;
    }
`
const BannerTitle = styled.h1`
    position: absolute;
    margin: 40px 20px;
    font-size: 48px;
    color: #FFFFFF;
    text-align: center;
    
    @media (max-width: 768px) {
        margin-left: 15px;
        padding-right: 85px;    
        font-size: 24px;
        text-align: left;
    }
`

function BannerHome() {
    return (
        <BannerSection>
            <BannerContainer>
                <BannerImg src={Image} alt='Image de la bannière' />
                <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
            </BannerContainer>
        </BannerSection>
    )
}

export default BannerHome