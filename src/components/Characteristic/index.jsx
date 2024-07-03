import styled from "styled-components";
import Profil from "../../assets/image_apropos.png"


const Section = styled.section`
    margin: 25px 100px;
     @media (max-width: 768px) {
        margin: 0 20px;
    }
`
const TitleAndPerson = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const TitleAndTags = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
`

const PersonAndRating = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

     @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-top: 5px;
    }
`
const Title = styled.h1`
    color: #FF6060;
    font-size: 36px;
    font-weight: 500;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    margin: 5px 0 20px 0;

    @media (max-width: 768px) {
        font-size: 14px;
        margin: 5px 0 10px 0;
    }
`
const TagsDiv = styled.div`
    display: flex;
    gap: 10px;
`
const Tags = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    background: #FF6060;
    color: #FFFFFF;
    width: 115px;
    height: 25px;
    border-radius: 10px;

    @media (max-width: 768px) {
    width: 84px;
    height: 18px;  
       border-radius: 5px;
    font-size: 10px;
    }
`
const Name = styled.p`
    color: #FF6060;
    font-size: 18px;
    font-weight: 500;
    margin: 0;

     @media (max-width: 768px) {
        font-size: 12px;
    }

`
const NameAndPics = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 47px;

  
`
const ProfilPics = styled.img`
    border-radius: 100%;
    object-fit: cover;
    width: 64px;
    height: 64px;

    @media (max-width: 768px) {
        width: 32px;
    height: 32px;
    }

`

const NameAndSurname = styled.div`
    display: flex;
    flex-direction: column;
`
const Rating = styled.i`
    font-size: 24px;
    color: #FF6060;

    @media (max-width: 768px) {
        font-size: 13px;
    }
    
`
const RatingDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;

    @media (max-width: 768px) {
        align-items: center;
    }
`

function CharacteristicSection() {

    
    return (
        <Section>
            <TitleAndPerson>
                <TitleAndTags>
                    <Title>Paris center on the romantique canal Saint Martin</Title>
                    <Subtitle>Paris, ile-de-France</Subtitle>
                    <TagsDiv>
                        <Tags>Cosy</Tags>
                        <Tags>Canal</Tags>
                        <Tags>Paris 10</Tags>
                    </TagsDiv>
                </TitleAndTags>
                <PersonAndRating>
                    <NameAndPics>
                        <NameAndSurname>
                            <Name>Revenir dessus</Name>
                        </NameAndSurname>
                        <ProfilPics src={Profil} />
                    </NameAndPics>
                    <RatingDiv>
                        <Rating className="fa-solid fa-star"></Rating>
                        <Rating className="fa-solid fa-star"></Rating>
                        <Rating className="fa-solid fa-star"></Rating>
                        <Rating className="fa-solid fa-star"></Rating>
                        <Rating className="fa-solid fa-star"></Rating>
                    </RatingDiv>
                </PersonAndRating>
            </TitleAndPerson>
        </Section>
    )
  
}

export default CharacteristicSection