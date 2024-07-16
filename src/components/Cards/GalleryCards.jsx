import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardAlone from './Card'
import data from '../../data/data.json'


const CardsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 50px 60px;
    margin: 0 100px 50px 100px;
    padding: 55px 50px 45px 50px;
    background-color: #F6F6F6;
    border-radius: 25px;

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 30px 50px 30px;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0 20px 30px 20px;
        padding: 0;
        gap: 20px;
        background-color: #FFFFFF;
    }
`
const TheLink = styled(Link)`
    width: 100%;
`

function GalleryCards() {
    const [cards, setCards] = useState([])
    useEffect(() => {
      setCards(data); 
    }, [])
  
    return (
      <CardsSection>
        {cards.map((card) => (
          <TheLink key={card.id} to={`/fiche-logement/${card.id}`}>
            <CardAlone title={card.title} cover={card.cover} />
          </TheLink>
        ))}
      </CardsSection>
    )
  }
  
  export default GalleryCards