import styled from "styled-components"

type modalInfoProps = {
    backgroundInfo: string,
    borderR?: string
}

export const BaseModal = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 99;
    background-color: #0000005c;
    left: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalInfo = styled.div<modalInfoProps>`
    background-color: white;
    width: min(80%, 800px);
    height: 40%;
    display: flex;
    align-items: center;
    justify-content:space-around ;
    
    .leftImage{
        width: 45%;
        height: 100%;
       
        background-image: url(${props=> props.backgroundInfo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 75%;
        
    }
    .rightInfo {
        
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    .rTop {
        width: 100%;
        border-bottom: 1px solid silver;
        height: 45%;
        padding: 10px;

        p{
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        h1{
            font-size: 22px;
        }
    }
    .dColors {
        width: 90%;
        height: 30%;
                
        display: flex;
        align-items: center;
        span {
            font-weight: 700;
            margin-right: 10px;
        }
        .divCxColor {
            outline: none;
            border: 1px solid #6e6e6e;
            width: 50%;
            height: 90%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 5px;
            background-color: #dadada;
            overflow-x: auto;
            background-color: transparent;
        }
    }
    .rBton {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .dSize-rbton {
            
            width: 100%;
            height: 50%;
            padding: 10px;
            display: flex;
            
            align-items: center;

            h2 {
                font-size: 20px;
                font-weight: 500;
                margin-right: 10px;
                
            }

            .dSizeCx {
                width: 50%;
                height: 50%;
                border: 1px solid #6e6e6e;
                background-color: transparent;
                padding-left: 5px;
            }
        }
    }

    .btnInfoModal {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 35%;

        button {
            cursor: pointer;
            background-color: transparent;
            border: 1px solid silver;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            
        }
        .btnCart {
            width: 60%;
            height: 100%;
            font-size: 25px;

            :hover  {
                background-color: #42bb42;
                color: white;
            }
            :hover .btnIcon {
                fill: white;
            }
    
        }
        
        .btnCancel{
            width: 35%;
            height: 70%;
            font-size: 17px;

            :hover { 
                background-color: #ff0404c1;
                color: white;
            }
            :hover .btnIcon {
                fill: white;
            }
        }
        .btnIcon {
            
        }
    }


`

export const CxColor = styled.option<modalInfoProps>`
    cursor: pointer;
    font-size: 25px;
    margin-right: 5px;
    background-color: ${props => props.backgroundInfo};
    color: green;

    :hover {
        box-shadow: 0 0 10px 100px #ffffff inset;
    }

    
`

export const CxSize = styled.option`
    
    font-size: 20px;
`