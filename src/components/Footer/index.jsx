import styled from "styled-components"
import Logo from "../../assets/logo_footer.png"


const FooterSection = styled.footer`
    padding: 65px 0 10px 0;
    background: #000000;

    @media (max-width: 768px) {
        padding: 65px 125px 50px 125px;
    }
`
const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF;
    
    @media (max-width: 768px) {
        gap: 0;
        font-size: 12px;
    }
`
const FooterLogo = styled.img`
    width: 122px;
    height: 40px;
`

function Footer() {
    return (
        <FooterSection>
            <FooterContent>
                <FooterLogo src={Logo} />
                <p>© 2020 Kasa. All rights reserved</p>
            </FooterContent>
        </FooterSection>
    )
}

export default Footer