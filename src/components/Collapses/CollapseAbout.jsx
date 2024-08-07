import styled from 'styled-components'
import TheCollapse from './CollapseGeneric'


const Section = styled.section`
  margin: 0 210px 40px 210px;

  @media (min-width: 768px) and (max-width: 1024px) {
      margin: 0 110px 40px 110px;
    }

  @media (max-width: 768px) {
      margin: 0 20px 20px 20px;
  }
`
const AllCollapse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }
`
const CollapseData = [
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
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."
  }
]

function DisplayAllCollapse() {
  return(
    <Section>
      <AllCollapse> 
        {CollapseData.map((item, index) => (
          <TheCollapse key={index} title={item.title} content={item.content} />
        ))}
      </AllCollapse>
    </Section>
  )
}

export default DisplayAllCollapse