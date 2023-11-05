import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    justify-content: center;
    font-family: 'Open Sans';
    padding-bottom: 10px;
    
    .fundo{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 300px;
    }
       
    .barra-colorida > img{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 60.274px;
    }

    .conteudo{
        display: flex;
        justify-content: space-around;
        gap: 50px;
        h1{
            margin: 0 0 10px 0;
            text-align: center;
        }
        svg{
            color: white;
            position: relative;
            left: 45%;
            width: 25px;
            height: 25px;
            margin-bottom: 10px;
        }
        li{
            text-decoration: none;
        }
    }

    .institucional{
        padding: 2rem;
        align: right;
        
    }
    .institucional > h1{
        color: #FFF;
        font-size: 32px;
        margin: 60px, 60px, 15px, 0;
        

    }
    .secretaria {
        color: #FFF;
        font-family: Open Sans;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .fundarpe {
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .funcultura{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }


    .linguagens{
        padding: 2rem;
        align: right;
        
    }
    .linguagens > h1{
        color: #FFF;
        font-size: 32px;

    }
    .audio-visual{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .geral{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .microprojeto{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .musica{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }


    .suporte{
        margin-left: 2px
        position: relative;
        padding: 2rem;
        align: right;
        
    }
    .suporte > h1{
        position: relative;
        color: #FFF;
        font-size: 32px;
    }
    .expediente{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .ouvidoria{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .noticias{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .politica-privacidade{
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        line-height: normal;
    }

    .social{
        float: right;
        position: relative;
        top: 60px;
        color: white;
        display: flex;
        gap: 15px;
        margin-right: 30px;
        svg{
            width: 30px;
            height: 30px;
        }
    }
    
`;
