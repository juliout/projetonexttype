import styled from "styled-components";

type Props = {
    backgroudChose?: string
}


export const DivHeader = styled.header`
    width: 100%;
    height: 60px;

    border-bottom: 1px #d3d3d3 solid;
    padding: 2px;
    display: flex;
    align-items: center;

    .Logo{
        width: 120px;
        height: 55px;
        margin: 0 1%;
    }

    ul {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .registerLogin {
        font-size: 17px;
        
        width: 15%;
        max-width: 135px;
        margin-left:  auto;
    }
    .marketCart {
        width: 30px;
        height: 32px;
        
        margin-right: 3%;
        
    }


`

export const BtnLink = styled.a<Props>`

            border-right: 1px solid #d3d3d3;
            width: 33%;
            height: 100%;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;

            :hover {
                background: url(${props => props.backgroudChose});
                background-repeat: no-repeat;
                background-position: center;
                
                transition: 150ms;
                li{
                    color: rgba(0, 0, 0, 0);
                }
            }
    
`