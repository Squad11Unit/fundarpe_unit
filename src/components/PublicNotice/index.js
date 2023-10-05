import { Container , SectionOne, SectionTwo, Title, Image, FileIcon, LampIcon } from "./styled"
import parecerista from "../../assets/editalPage/parecerista.png"
import { FileText, Lightbulb } from "react-bootstrap-icons"

const PublicNotice = ({ title, image, registrationDetails }) => {
    return (
        <Container>
            <SectionOne>
                <Title>
                    <FileIcon>
                        <FileText/>
                        <span>FUNCULTURA 2023</span>
                    </FileIcon>
                    <LampIcon>
                        <Lightbulb/>
                        <span>Edital</span>
                    </LampIcon>
                   <p>EDITAL DE CREDENCIAMENTO DE PARECERISTAS FUNCULTURA - 2023</p> 
                </Title>
                <Image>
                    <img src={parecerista} alt="Capa do edital de pareceristas."/>
                </Image>
            </SectionOne>

            <SectionTwo>
                <article>
                    <p><b>Publicado por </b></p> 
                    <a href="https://www.mapacultural.pe.gov.br/agente/11/">Secretaria de Cultura do Estado de Pernambuco</a>
                    <p>PARA SUPORTE TÉCNICO ENTRAR EM CONTATO ATRAVÉS DO WHATSAPP (81) 3184-3018.SELECIONE:OPÇÃO 1: CONTINUAR O ATENDIMENTO;OPÇÃO 2: CONTATO COMO</p> 
                    <button type="button">Anexos</button>
                </article>
            </SectionTwo>
        </Container>
    )
}

export default PublicNotice;
