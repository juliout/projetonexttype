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
    }

    span, p , a, input[type=number]{
        font-family: 'Lora', serif;
        font-size: 15px;
    }
`

