import styled from 'styled-components'


// All the variable for the Banner on homepage and about 
export const BannerContainer = styled.div`
    position: relative;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 223px; 
    border-radius: 25px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); 
    }

    @media (max-width: 768px) {
        justify-content: flex-start;
        height: 110px;
        border-radius: 10px;
        box-shadow: none;
    }
`
export const BannerImg = styled.img`
    width: 100%;    
    height: 100%;
    object-fit: cover;
`
// *****************************************************


// revoir ce fichier car fil du code je pense qu'on va devoir rajouter des éléments 