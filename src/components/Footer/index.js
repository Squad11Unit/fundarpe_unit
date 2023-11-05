import { ContainerFooter } from "./styled";
import { GeoAlt, Hash, Headset, Twitter, Facebook, Linkedin } from "react-bootstrap-icons"
import background from "../../assets/Footer/fundo.png"
import rodape from "../../assets/Footer/Barra colorida footer.png";
import logosRodape from "../../assets/Footer/logo-Fundarpe-pernambuco.png";

const Footer = () => (
    <ContainerFooter>
        <section className="fundo" style={{
            width: '100%',
            height: '630px',
            backgroundImage: `url(${background})`
        }}>

        
            <div className="barra-colorida" >
                <img src={rodape} alt="barra colorida do rodapé" className="colorido-rodape"/>
            </div>
            <section className="conteudo">
                <div className="institucional">
                    <GeoAlt />
                    <h1>INSTITUCIONAL</h1>
                    <a href="https://www.cultura.pe.gov.br/secultpe/"><li className="secretaria">Secretaria de cultura</li></a>
                    <a href="https://www.cultura.pe.gov.br/fundarpe/"><li className="fundarpe">Fundarpe</li></a>
                    <a href="https://www.cultura.pe.gov.br/funcultura/"><li className="funcultura">Funcultura</li></a>
                </div>
                <div className="linguagens">
                    <Hash /> 
                    <h1>LINGUAGENS</h1>
                    <a href="https://www.cultura.pe.gov.br/audiovisual/"><li className="audio-visual">Audio Visual</li></a>
                    <a href="/"><li className="geral">Geral</li></a>
                    <a href="/"><li className="microprojeto">Microprojeto</li></a>
                    <a href="https://www.cultura.pe.gov.br/musica/"><li className="musica">Música</li></a>
                </div>
                <div className="suporte">
                    <Headset />
                    <h1>SUPORTE</h1>
                    <a href="https://www.cultura.pe.gov.br/pagina/expediente/"><li className="expediente">Expediente</li></a>
                    <a href="https://www.cultura.pe.gov.br/pagina/ouvidoria/"><li className="ouvidoria">Ouvidoria</li></a>
                    <a href="https://www.cultura.pe.gov.br/noticias/"><li className="noticias">Notícias</li></a>
                    <a href="/"><li className="politica-privacidade">Política de privacidade</li></a>
                </div>
            </section>

            {/* Na section abaixo está os icones e as logos da fundarpe e governo de pernambuco */}
            <section className="ultimos-elementos">
                <div className="logos-funpe">
                    <img src={logosRodape} alt="logo de 50 anos da fundarpe e do governo de pernambuco" />
                </div> 
                <div className="social">
                    <Twitter />
                    <Facebook />
                    <Linkedin />
                </div>
            </section>
            
        </section> 

    </ContainerFooter>
        
);

export default Footer;