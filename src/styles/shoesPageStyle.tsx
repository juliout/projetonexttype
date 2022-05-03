import styled from "styled-components";

type ColorProps = {
    colorBg?: string
}

type BackGroundProp = {
    backgroundImage?: string
}

export const BodyShoesPage = styled.div`
    width: 100%;
    height: auto;
    min-height: 87vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

`

export const AsideMenu = styled.div`
    width: 30%;
    height: 70vh;
    border: 1px solid silver;
    margin-top: 5%;
    border-radius: 0 20px 20px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 820px) {
        height: 70%;
    }

    ul {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
        
    }
    .divOptionsMenu {
        width: 100%;
        display: flex;

        flex-wrap: wrap;
    }

    li {
        cursor: pointer;
        width: 50%;
        height: 60px;
    
        font-size: 1.7em;
    }
    label{
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li:hover {
        background-color: silver;
        transition: 1ms;
    }

    input[type=radio] {
        display: none;
    }

    input[type=radio]:checked + label {
        background-color: silver;
        color: white;
        border-radius: 10px;
        transition: 1s;
    }

    .colorsColection {
        border: 1px solid silver;
        padding: 5px;
        width: 80%;
        height: 15%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        background-color: #dbdbdb ;
    }


`
export const BoxColor = styled.div<ColorProps>`
    background-color: ${props => props.colorBg};
    width: 40px;
    height: 40px;
    margin-right: 2px;
    cursor: pointer;

`

export const MainPriceS = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 20%;
    margin-top: 30px;
    .divInputsPrrice{
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;

    }

    .divInputs {
        width: 100%;
        max-width: 450px;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2px;

        label {
            width: 35%;
            font-size: 20px;
        }
        input[type=number] {
            width: 60%;
            height: 75%;
            padding-left: 5%;
            border: 1px solid silver;
            outline: none;
            color: #5f5f5f;
        }
    }
    
    button {
        width: 100%;
        max-width: 400px;
        height: 35px;
        margin-top: 5px;
        background-color: transparent;
        border: 1px solid silver;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
    }
    button:hover {
        background-color: black;
        color: white;
    }

`

export const MainShowCase = styled.div`
    width: 65%;
    height: auto;
    min-height: 800px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const DivItensShowCase = styled.div`
    border: 1px solid silver;
    border-radius: 20px;
    height: auto;
    min-height: 750px;
    width: 100%;
    margin-bottom: 2%;
    padding: 20px;

    display: flex;
    flex-wrap: wrap;
    flex: none;
  
    justify-content: space-around;
`

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
        border: 1px solid green;
        background: url('/images/addcarrinho.png');
        background-size: 80% 80%;
        background-repeat: no-repeat;
        color: rgba(0, 0, 0, 0);
        border-radius: 50px;
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
