import styled from "styled-components";

export const PaymentDiv = styled.div`
    width: 100%;
    min-height: 87vh;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LeftPayment = styled.div`
    width: 60%;
    min-height: 80vh;
    height: auto;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid silver;

    .cartList {
        width: 100%;
        height: auto;
        min-height: 400px;

        border-top: 1px solid silver;        
    }

    .cardCart {
        height: 140px;
        border-bottom: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .divImage {
        background: url('/images/teste.png');
        background-repeat: none;
        background-size: 100%;
        background-position: center;
        height: 90%;
        width: 25%;
    }

    .divInfosProduct {
        width: 65%;
        height: 95%;
        
        padding: 5px;

        h2 {
            font-size: 22px;
            font-weight: 500;
        }
        p {
            font-size: 17px;
            display: flex;
            align-items: center;
            margin-bottom: 2px;
            
        }
        .IoMdColorFill {
            margin-left: 5px;
        }
        span {
            font-size: 18px;
            font-weight: 700;
            margin-left: 5px;
        }   
    }
    .btnProducts button {
            cursor: pointer;
            width: 30px;
            height: 30px;
            background-color: transparent;
            border-radius: 10px;
            border: 1px solid silver;
            display: flex;
            align-items: center;
            justify-content: center;
            :hover {
                background-color: black;
            }
            :hover .AiOutlineDelete {
                fill: white;
            }
    }

`

export const RightPayment = styled.div`
    width: 38%;
    height: 80vh;
    border-radius: 10px;
    border: 1px solid silver;
    
`