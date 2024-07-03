import { useState } from 'react';
import styled, { css } from 'styled-components';

const Section = styled.section`
  margin: 0 210px 40px 210px;

  @media (max-width: 768px) {
        margin: 0 20px 20px 20px;
    }
`
export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  color: #FFFFFF;

  @media (max-width: 768px) {
        gap: 20px;
    }
`
export const OrangeCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 10px 15px;
  font-size: 24px;
  font-weight: 700;
  background: #FF6060;
  border-radius: 5px;
  
   @media (max-width: 768px) {
        padding: 6px 10px;
        font-size: 13px;
    }
`
export const DropdownContent = styled.div`
  padding: 0 20px;
  color: #000000;
  background: #F6F6F6;
  border-radius: 5px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 250ms ease-in-out;
  
  ${({ $isActive }) =>
    $isActive &&
    css`
      max-height: 200px; 
      padding: 0 20px;
    `}
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;

   @media (max-width: 768px) {
        font-size: 12px;
    }
`
export const IconButton = styled.i`
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  ${({ $rotated }) =>
    $rotated &&
    css`
      transform: rotate(180deg);
    `}

  @media (max-width: 768px) {
        font-size: 18px;
    }
`
const dropdownData = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien repectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."
    }
  ];

function TheDropdown() {
  const initialState = [false, false, false, false]; 
  const [activeStates, setActiveStates] = useState(initialState);
  const handleToggle = (index) => {
    setActiveStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <Section>
      <Dropdown>
        {dropdownData.map((item, index) => (
          <div key={index}>
            <OrangeCard>
              {item.title}
              <IconButton
                className="fa-solid fa-chevron-up"
                $rotated={activeStates[index]}
                onClick={() => handleToggle(index)}
              />
            </OrangeCard>
            <DropdownContent $isActive={activeStates[index]}>
              <Text>{item.content}</Text>
            </DropdownContent>
          </div>
        ))}
      </Dropdown>
    </Section>
  );
}

export default TheDropdown;