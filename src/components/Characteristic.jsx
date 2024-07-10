import styled from 'styled-components'
import TheDropdown from '../components/DropdownGeneric'
import AllTags from './Tags'
import StarRating from './StarRating'
// import { Break } from '../style/atoms'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'
import Slider from './Slider'
import Hostname from './Hostname'

const Section = styled.section`
    margin: 0 100px 50px 100px;

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 30px 50px 30px;
    }
     
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
    flex-wrap: wrap;
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
    margin-left: 50px;
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
const BannerSection = styled.section`
    margin: 0 100px 25px 100px;

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 30px 25px 30px;
    }

    @media (max-width: 768px) {
        margin: 0 20px 10px 20px;
    }
`


function CharacteristicSection() {
    const { id } = useParams(); 
    const logement = data.find(item => item.id === id); 

    const dropdownData = [
        {
          title: "Description",
          content: logement.description
        },
        {
          title: "Equipements",
          content: logement.equipments
        }
    ];
    
    return (
        <>
        <BannerSection>
            
                <Slider/>
            
        </BannerSection>
        <Section>
            <TitleAndPerson>
                <TitleAndTags>
                    <Title>{logement.title}</Title>
                    <Subtitle>{logement.location}</Subtitle>
                    <TagsDiv >
                        {logement.tags.map((item, index) => (
                            <AllTags key={index} content={item} />
                        ))}
                    </TagsDiv>
                </TitleAndTags>
                <PersonAndRating>
                    <NameAndPics>
                        <Hostname fullName={logement.host.name} />
                        <ProfilPics src={logement.host.picture} />
                    </NameAndPics>
                    <RatingDiv>
                        <StarRating rating={parseInt(logement.rating, 10)} />
                    </RatingDiv>
                </PersonAndRating>
            </TitleAndPerson>
            <BothDropdown>
                {dropdownData.map((item, index) => (
                <TheDropdown key={index} title={item.title} content={item.content} />
                ))}
            </BothDropdown>
        </Section>
        </>
    )
}

export default CharacteristicSection