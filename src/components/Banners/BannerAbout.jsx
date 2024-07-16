import styled from 'styled-components'
import { BannerContainer } from '../../style/atoms'
import { BannerImg } from '../../style/atoms'
import Image from '../../assets/image_apropos.png'


const BannerSection = styled.section`
    margin: 0 100px 40px 100px;
    
    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 30px 40px 30px;
    }

    @media (max-width: 768px) {
        margin: 0 20px 20px 20px;
    }
`
const StyledBannerContainer = styled(BannerContainer)`
    box-shadow: none;
`

function BannerAbout() {
    return (
        <BannerSection>
            <StyledBannerContainer>
                <BannerImg src={Image} alt='Image de la bannière'/>
            </StyledBannerContainer>
        </BannerSection>
    )
}

export default BannerAbout