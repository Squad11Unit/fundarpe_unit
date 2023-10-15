import styled from "styled-components";

export const Container = styled.div`
    width: 100wv;
    margin: 0;
    padding: 100px;
    font-family: 'Open Sans';
`;

export const SectionOne = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content:space-between;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    > p {
        font-weight: 600;
        line-height: 1.3;
        width: 240px;
        word-break: break-word;
        word-spacing: 4px;
        font-style: italic;
    }
`;

export const Image = styled.div`
    width: 45%;
    > img{
        width: 100%;
        height: 300px;
    }

`;

export const FileIcon = styled.div`
    color: #A0A0A0;
    display: flex;
    gap: 0.4rem;
    line-height: 1.3;
`;

export const LampIcon = styled.div`
    color: #FFA500;
    display: flex;
    gap: 0.4rem;
`;

export const SectionTwo = styled.div`
    display: flex;   
    font-style: italic;
    margin-top: 20px;
    a {
        color: #000000;
    }

    ul{
        font-weight: bold;
    }

    li{
        font-weight: 500;
    }

    li, ul {
        list-style-type: none;
        padding: 0;
    }

    article {
        div {
            display: flex;
            margin-bottom: 30px;
            flex-wrap: wrap;
            
            img {
                width: 50px;
                height: 50px;
                margin-right: 20px;
            }
            
            div {
                display: flex;
                flex-direction: column;
                
                p {
                    margin-bottom: 0;
                }
            }

            div:nth-child(3) {
                margin: 2px 0px 0px 562px;
                button{
                    background-color: #011A3F;
                    border: none;
                    font-weight: bold;
                    border-radius: 50px;
                    padding: 10px 20px;
                }
                svg{
                    margin-right: 10px;
                }
            }


        }
    }
`;

export const SectionThree = styled.div`
    article {
        background-color: #D9D9D9;
        margin-top: 30px;
        margin-left: -25px;
        width: 103%;
        padding: 25px 20px 70px 30px;

        div {
            margin: -10px 0px 15px 1050px;
            
            svg {
                width: 110%;
                height: 110%;
              
            }
        }

        h3 {
            font-family: Source Sans 3;
            font-weight: bold;
            color: #011A3F;
            margin-top: -50px;
        }

        p {
            margin-top: 20px;
            margin-right: 15px; 
            font-style: italic;
        }
    }

    div {
        margin-left: 350px;
        button {
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
        }
        svg {
            margin-right: 10px;
        }
        .botão1{
            color:#FFFFFF;
            background-color: #E31F28;
            font-family: Source Sans 3;
            font-weight: bold;
            margin: 50px 50px 0px -10px;
        }
        .botão2{
            color:#FFFFFF;
            background-color: #011A3F;
            font-family: Source Sans 3;
            font-weight: bold;
            margin: 50px 0px 0px 0px;
        }

    }
`;

