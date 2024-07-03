import styled from "styled-components";
import { Link } from "react-router-dom";


const CardsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 50px 60px;
    margin: 0 100px 50px 100px;
    padding: 55px 50px 45px 50px;
    background-color: #F6F6F6;
    border-radius: 25px;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: 0 20px 30px 20px;
        padding: 0;
        gap: 20px;
        background-color: #FFFFFF;
    }
`
const TheLink = styled(Link)`
    width: 100%;
`
const Card = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 340px;
    background-color: #FF6060;
    border-radius: 10px;
    
    @media (max-width: 768px) {
        height: 255px;
    }
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const CardText = styled.h2`
    position: absolute;
    margin-left: 20px;
    padding-right: 145px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
`

function GalleryCards() {
    return (
        <CardsSection>
            <TheLink to="/fiche-logement">
            <Card>
                <CardImg src="/" />
                <CardText>Titre de la location</CardText>
            </Card>
            </TheLink>
            <TheLink to="/fiche-logement">
            <Card>
                <CardImg src="/" />
                <CardText>Titre de la location</CardText>
            </Card>
            </TheLink>
            <TheLink to="/fiche-logement">
            <Card>
                <CardImg src="/" />
                <CardText>Titre de la location</CardText>
            </Card>
            </TheLink>
            <TheLink to="/fiche-logement">
            <Card>
                <CardImg src="/" />
                <CardText>Titre de la location</CardText>
            </Card>
            </TheLink>
            <TheLink to="/fiche-logement">
            <Card>
                <CardImg src="/" />
                <CardText>Titre de la location</CardText>
            </Card>
            </TheLink>
            <TheLink to="/fiche-logement">
            <Card>
                <CardImg src="/" />
                <CardText>Titre de la location</CardText>
            </Card>
            </TheLink>
        </CardsSection>
    )
}

export default GalleryCards