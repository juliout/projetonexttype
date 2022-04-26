import styled from "styled-components";

export const Slider = styled.div`

    width: 100%;
    height: 50vh;
    background-color: red;
    overflow: hidden;
    scroll-behavior: smooth;
    
    @media (min-width: 1326px) {
        height: 55vh;
    }

    .slideContainer{
        width: 300%;
        height: 100%;
        display: flex;
        overflow: hidden;
        scroll-behavior: smooth;
        
    }

    .slide {
        width: 33.33333333%;
        height: 100%;
        transition: 1s;
        display: flex;
        justify-content: left;
        align-items: center;
        
        img {
            width: 100%;
            height: 100%;
        }
    }

    .btnLeftSlide {
        cursor: pointer;
        position: absolute;
        top: 28%;
        left: 30px;
        fill: white;
        @media (min-width: 1326px) {
        top: 37%;
    }
    }

    .btnRightSlide {
        cursor: pointer;
        position: absolute;
        top: 28%;
        right: 35px;
        fill: white;
        @media (min-width: 1326px) {
        top: 37%;
    }
    }
`

export const BottomDiv = styled.div`

    width: 100%;
    height: 37vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 1326px) {
        height: 33vh;
    }

    div {
        width: 60%;
        height: 8vh;
  
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a {
        width: 40%;
        height: 70%;
        background-color: black;
        border-radius: 30px;
        color: white;
        font-family: 'Orelega One', cursive;
        font-size: max(20px, 2.5vw);

        display: flex;
        align-items: center;
        justify-content: center;
    }

`