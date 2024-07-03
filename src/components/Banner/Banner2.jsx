import { ImgContainer } from "../../style/atoms";
import { BannerImg } from "../../style/atoms";
import Image from "../../assets/image_apropos.png"
import styled from "styled-components";


const BannerSection = styled.section`
    margin: 0 100px 40px 100px;
    
    @media (max-width: 768px) {
        margin: 0 20px 20px 20px;
    }
`

function BannerAbout() {
    return (
        <BannerSection>
            <ImgContainer>
                <BannerImg src={Image} />
            </ImgContainer>
        </BannerSection>

    )
}

export default BannerAbout