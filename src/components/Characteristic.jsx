import styled from "styled-components";
import Profil from "../assets/image_apropos.png"
import TheDropdown from '../style/atoms';
import { Break } from "../style/atoms";


const Section = styled.section`
    margin: 0 100px 50px 100px;
     
    @media (max-width: 768px) {
        margin: 0 20px 25px 20px;
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
`
const Title = styled.h1`
    margin: 0;
    font-size: 36px;
    font-weight: 500;
    color: #FF6060;
    
    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const Subtitle = styled.h2`
    margin: 5px 0 20px 0;
    font-size: 18px;
    font-weight: 500;
    
    @media (max-width: 768px) {
        margin: 10px 0;
        font-size: 14px;
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
    width: 115px;
    height: 25px;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
    background: #FF6060;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 84px;
        height: 18px;  
        font-size: 10px;
        border-radius: 5px;
    }
`
const PersonAndRating = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

     @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-top: 20px;
    }
`
const NameAndPics = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 47px;
`
const NameAndSurname = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #FF6060;
    text-align: right;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`
const ProfilPics = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100%;
    object-fit: cover;
    
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`
const RatingDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;

    @media (max-width: 768px) {
        align-items: center;
        gap: 5px;
    }
`
const Rating = styled.i`
    font-size: 24px;
    color: #FF6060;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`
const BothDropdown = styled.div`
    display: flex;
    gap: 80px;
    margin-top: 25px;

    @media (max-width: 768px) {
       flex-direction: column;
       gap: 20px;
       margin-top: 15px;
    }
`
const dropdownData = [
    {
      title: "Description",
      content: ""
    },
    {
      title: "Equipements",
      content: ""
    },
    
  ];

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
                            <Name>Alexandre<Break />Dumas</Name>
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
            <BothDropdown>
                {dropdownData.map((item, index) => (
                <TheDropdown key={index} title={item.title} content={item.content} />
                ))}
            </BothDropdown>
        </Section>
    )
}

export default CharacteristicSection