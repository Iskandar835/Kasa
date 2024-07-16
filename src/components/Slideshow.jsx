import styled, { css } from "styled-components"
import { useState } from 'react'
import PropTypes from 'prop-types'


const BannerSection = styled.section`
    margin: 0 100px 25px 100px;

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 30px 25px 30px;
    }

    @media (max-width: 768px) {
        margin: 0 20px 10px 20px;
    }
`
const BannerSlider = styled.div`
    position: relative;
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    width: 100%;
    height: 415px;
    color: #FFFFFF;
    font-size: 80px;
    
    @media (max-width: 768px) {
        height: 255px;
        font-size: 20px;
    }
`
const BannerImg = styled.img`
    position: absolute;
    z-index: -1;
	width: 100%;
	height: 100%;
    border-radius: 25px;
	object-fit: cover; 

    @media (max-width: 768px) {
        border-radius: 10px;
    }
`
const ArrowLeft = styled.i`
    position: absolute;
    left: 20px;
    cursor: pointer;

    ${props => props.$hide && css`
        display: none;
      `}
    
    @media (max-width: 768px) {
        left: 8px;
    }
`
const ArrowRight = styled.i`
    position: absolute;
    right: 20px;
    cursor: pointer;
    
    ${props => props.$hide && css`
        display: none;
      `}
    
    @media (max-width: 768px) {
        right: 8px;
    }
`
const NumberDiv = styled.div`
    position: absolute;
    bottom: 10px;
    
    ${props => props.$hide && css`
        display: none;
      `}
    
    @media (max-width: 768px) {
        display: none;
    }
`
const Number = styled.p`
    font-size: 18px;
    font-weight: 500;
`

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
    const hideControls = images.length <= 1

    return(
        <BannerSection>
            <BannerSlider>
                <BannerImg src={images[currentIndex]} alt="Photo en carrousel du bien" />
                <ArrowLeft className="fa-solid fa-chevron-left arrow" $hide={hideControls} onClick={handlePrev}></ArrowLeft>
                <ArrowRight className="fa-solid fa-chevron-right arrow" $hide={hideControls} onClick={handleNext}></ArrowRight>
                <NumberDiv $hide={hideControls}>
                    <Number>{currentIndex + 1} / {images.length}</Number>
                </NumberDiv>
            </BannerSlider>
        </BannerSection>
    )
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slideshow