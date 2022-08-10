import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        color: #000000;
    }
    body {
        width: 100%;
    }

    h1, h2, li, label, button {
        font-family: 'Orelega One', cursive;
        @media(max-width: 700px) {
            font-size: 20px;
        }
        @media(max-width: 426px) {
            font-size: 14px;
        }
    }

    input{
        font-family: 'Lora', serif;
    }
   
`

