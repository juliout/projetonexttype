import styled from "styled-components";

type BackGroundProp = {
    backgroundImage?: string
}

export const CardItem = styled.div<BackGroundProp>`
    border: 1px solid silver;
    width: 40%;
    min-width: 200px;
    max-width: 250px;
    height: 30vh;
    margin-top: 15px;
    background-color: #f6f6f6;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        font-size: 15px;
        margin: 2px 0;
        text-align: center;
    }
    span {
        font-size: 15px;
   
    }
    button {
        cursor: pointer;
        
        width: 90%;
        height: 30px;
        margin-top: 10px;
        border: 1px solid silver;
        border-radius: 10px;
        transition: 1s; 
    }

    button:hover { 
        width: 40px;
        height: 40px;
        border: 1px solid transparent;
        background: url('/images/lup.png');
        background-size: 95% 95%;
        background-repeat: no-repeat;
        color: rgba(0, 0, 0, 0);
        border-radius: 100px;
        background-position: center;
        transition: 0s;
        padding: 5px;

    }
        
`

export const BackGroundDivCard = styled.div<BackGroundProp>`
    width: 100%;
    height: 57%;
    background: url(${props => props.backgroundImage});
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 5%;
    
    :hover { 
        background-size: 100% 107%;
        transition: 1s;
    }
    
`