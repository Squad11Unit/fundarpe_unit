import { ContainerFooter } from "./styled";
import {
  GeoAlt,
  Hash,
  Headset,
  Twitter,
  Facebook,
  Linkedin,
} from "react-bootstrap-icons";
import background from "../../Assets/Footer/fundo.png";
import rodape from "../../Assets/Footer/Barra colorida footer.png";
import logosRodape from "../../Assets/Footer/logo-Fundarpe-pernambuco.png";

const Footer = () => (
  <ContainerFooter
    className="fundo"
    style={{
      width: "100%",
      backgroundImage: `url(${background})`,
    }}
  >
    <section>
      <div className="barra-colorida">
        <img
          src={rodape}
          alt="barra colorida do rodapé"
          className="colorido-rodape"
        />
      </div>
      <section className="conteudo">
        <div className="institucional">
          <GeoAlt />
          <h1>INSTITUCIONAL</h1>
          <a href="https://www.cultura.pe.gov.br/secultpe/" target="_blank" rel="noreferrer">
            <li className="secretaria">Secretaria de cultura</li>
          </a>
          <a href="https://www.cultura.pe.gov.br/fundarpe/" target="_blank" rel="noreferrer">
            <li className="fundarpe">Fundarpe</li>
          </a>
          <a href="https://www.cultura.pe.gov.br/funcultura/" target="_blank" rel="noreferrer">
            <li className="funcultura">Funcultura</li>
          </a>
        </div>
        <div className="linguagens">
          <Hash />
          <h1>LINGUAGENS</h1>
          <a href="https://www.cultura.pe.gov.br/audiovisual/" target="_blank" rel="noreferrer">
            <li className="audio-visual">Audio Visual</li>
          </a>
          <a href="https://www.cultura.pe.gov.br" target="_blank" rel="noreferrer">
            <li className="geral">Geral</li>
          </a>
          <a href="https://www.cultura.pe.gov.br/" target="_blank" rel="noreferrer">
            <li className="microprojeto">Microprojeto</li>
          </a>
          <a href="https://www.cultura.pe.gov.br/musica/" target="_blank" rel="noreferrer">
            <li className="musica">Música</li>
          </a>
        </div>
        <div className="suporte">
          <Headset />
          <h1>SUPORTE</h1>
          <a href="https://www.cultura.pe.gov.br/pagina/expediente/" target="_blank" rel="noreferrer">
            <li className="expediente">Expediente</li>
          </a>
          <a href="https://www.cultura.pe.gov.br/pagina/ouvidoria/" target="_blank" rel="noreferrer">
            <li className="ouvidoria">Ouvidoria</li>
          </a>
          <a href="https://www.cultura.pe.gov.br/noticias/" target="_blank" rel="noreferrer">
            <li className="noticias">Notícias</li>
          </a>
          <a href="/">
            <li className="politica-privacidade">Política de privacidade</li>
          </a>
        </div>
      </section>

      {/* Na section abaixo está os icones e as logos da fundarpe e governo de pernambuco */}
      <section className="ultimos-elementos">
        <img
          src={logosRodape}
          alt="logo de 50 anos da fundarpe e do governo de pernambuco"
        />
        <div className="social">
          <a href="https://twitter.com/culturape" target="_blank" rel="noreferrer"> <Twitter/> </a>
          <a href="https://www.facebook.com/culturape" target="_blank" rel="noreferrer"> <Facebook/> </a>
          <Linkedin />
        </div>
      </section>
    </section>
  </ContainerFooter>
);

export default Footer;
