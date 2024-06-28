import BannerAbout from "../../components/Banner/Banner2"
// import styled from "styled-components"

// const GridSection = styled.section`
//     margin: 0 180px 50px 180px
// `

// const Grid = styled.div`
//     display: grid;
//     font-size: 24px;
//     overflow: hidden;
//     font-weight: 700;
//     background-color: #FF6060;
//     height: 52px;
//     border-radius: 5px;
//     color: #FFFFFF;
// `
// const GridContent = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 100%;

// `
// const GridText = styled.p`
//     margin: 0 0 0 15px;
// `

// const IconInGrid = styled.i`
//     font-size: 24px;
//     margin: 0 25px 0 0;
// `

// const MenuAnimation = styled.div`
//     display: grid;
//     place-items: center;
//     width: 100%;
//     height: 50px;
//     flex-shrink: 0;
//     background-color: #E3E3E3;
//     border-radius: 0 0 5px 5px;
//     margin-bottom: -30px,
//     transition: margin-bottom 400ms;
// ******** le css juste au dessus il faut le garder c'est le bon style *****



// `

// const Dropdown = ({buttonText, content}) => {
//     return <div>Dropdown</div>
// }

// const DropdownButton = ({children}) => {
//     return <div>{children}</div>
// }
// const DropdownContent = () => {
//     return <div>DropdownContent</div>
// }
// export default Dropdown



function About() {
    return(
        <main>
            <BannerAbout />
            {/* <div>
                <DropdownButton>{buttonText}</DropdownButton>
                <DropdownContent>{content}</DropdownContent>
            </div> */}
        </main>
    )
}

export default About