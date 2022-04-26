import styled from "styled-components";

export const DivFooter = styled.div`
    width: 100%;
    height: 6.8vh;
    border-top: 2px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 1326px) {
        height: 5.9vh;
    }
    .divMidiasFooter{
        width: 12%;
        height: 70%;
     
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    
    h1 {
       font-size : 20px;
    }
` 