import { Container , SectionOne, Title, Image, FileIcon, LampIcon } from "./styled"
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
        </Container>
    )
}

export default PublicNotice;
