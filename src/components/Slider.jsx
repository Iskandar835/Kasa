// import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
// import data from '../data/data.json'






function Slider() {
    
    return(
    
        <>
            <div>slider1</div>
            <div>slider1</div>
            <div>slider1</div>
        </>
        
 
    )
}

export default Slider



// Le style est entierement defini avec le responsive, manque que je JS pour faire fonctionner 
// le carrousel avec les chiffre de reperage en bas de la photo 

// const BannerSlider = styled.div`
//     position: relative;
//     display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
//     width: 100%;
//     height: 415px;
//     color: #FFFFFF;
//     font-size: 80px;
    
//     @media (max-width: 768px) {
//         height: 255px;
//         font-size: 20px;
//     }
// `
// const BannerImg = styled.img`
//     position: absolute;
//     z-index: -1;
// 	width: 100%;
// 	height: 100%;
//     border-radius: 25px;
// 	object-fit: cover;
// 	object-position: center;

//     @media (max-width: 768px) {
//         border-radius: 10px;
//     }
// `
// const ArrowLeft = styled.i`
//     position: absolute;
//     left: 20px;

//     @media (max-width: 768px) {
//         left: 8px;
//     }
// `
// const ArrowRight = styled.i`
//     position: absolute;
//     right: 20px;

//     @media (max-width: 768px) {
//         right: 8px;
//     }
// `

// function Slider() {
//     return(
//     <BannerSection>
//         <BannerSlider>
//             <BannerImg src={Logo} />
//             <ArrowLeft className="fa-solid fa-chevron-left arrow"></ArrowLeft>
//             <ArrowRight className="fa-solid fa-chevron-right arrow"></ArrowRight>
//         </BannerSlider>
//     </BannerSection>
//     )
// }

// export default Slider