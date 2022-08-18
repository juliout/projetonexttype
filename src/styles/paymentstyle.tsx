import styled from "styled-components";

export const PaymentDiv = styled.div`
    width: 100%;
    min-height: 87vh;
    height: auto;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    background-color: #f3f3f3;
`

export const LeftPayment = styled.div`
    width: 40%;
    max-width: 1000px;
    min-width: 350px;
    height: 80vh;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid silver;
    margin: 0 auto;
    .cartList {
        width: 100%;
        height: 80vh;
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
    width: 30%;
    max-width: 600px;
    min-width: 350px;
    height: 88vh;

    border-left: 1px solid silver;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    .sumary {
        width: 70%;
        height: 30%;

        margin-top: 10px;
        padding: 10px;
        background-color: #f3f3f3;
        border-radius: 5px;

        h2 {
            display: flex;
            align-items: center;
            font-size: 20px;
            margin-bottom: 5px;
        }
        
        .valuePay { 
            width : 90%;
            height: 115px;
            
            margin: 20px auto;
            border-bottom: 2px solid silver;
            padding: 5px 0;

            p {
                font-size : 1.2em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }
            span { 
                display: flex;
                align-items: center;
        
            }
            
            .btnCoup {
                fill: #7b7bf3;
                cursor: pointer;
            }
            .couponLine { 
                height: 40px;
                font-size : 1.2em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }
            .sendcoupon {
                cursor: pointer;
            }

            .inputCoupon {
                width: 50%;
                height: 40px;
                
                display: flex;
                align-items: center;
                justify-content: space-around;
                
                
                input {
                    height: 40px;
                    width: 80%;
                    padding-left: 10px;

                    border: none;
                    outline: none;
                    font-size: 0.9em;
                
                    :focus {
                        border-bottom: 1px solid #7b7bf3;
                    }
                }
                button {
                    height: 40px;
                    width: 30px;
                    display: flex;
                    align-items: center;
                }
            }
        }

        .totalpay {
            width : 90%;
                        
            margin: 20px auto;
            padding: 5px 0;

            p {
                font-size : 1.2em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }
            span { 
                display: flex;
                align-items: center;
                font-size : 1.4em;
            }
        }

    }
    .PaymentMethod {
            width: 90%;
            height: 30px;
            background-color: #f3f3f3;

            margin-top: 10px;
        } 

`