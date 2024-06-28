import styled from "styled-components"
import { ImgContainer } from "../../style/atoms"
import { BannerImg } from "../../style/atoms"
import Image from "../../assets/image_accueil.png" 

const BannerSection = styled.section`
    margin: 0 100px 45px 100px;
    
    @media (max-width: 768px) {
        margin: 0 20px 20px 20px;
    }
`
const BannerTitle = styled.h1`
    position: absolute;
    z-index: 2;
    font-size: 48px;
    color: white;
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
            <ImgContainer>
                <BannerImg src={Image} />
                <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
            </ImgContainer>
        </BannerSection>
    )
}

export default BannerHome