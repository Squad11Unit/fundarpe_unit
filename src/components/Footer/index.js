import { ContainerFooter } from "./styled";
import rodape from "../../Assets/Footer/Barra colorida footer.png"
import mapaPernambuco from "../../Assets/Footer/Mapa pernambuco footer.png"

const Footer = () => (
    <ContainerFooter>
        
            <div className="barra-colorida" >
                <img src={rodape} alt="barra colorida do rodapé" className="colorido-rodape"/>
            </div>
            <div className="bandeira-pernambuco">
                <img src={mapaPernambuco} alt="mapa de Pernambuco" className="mapa-pernambuco"/>
            </div>
        
        
    </ContainerFooter>
        
);

export default Footer;