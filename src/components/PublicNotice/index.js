import { Container, SectionOne, SectionTwo, SectionThree, Title, Image, FileIcon, LampIcon } from "./styled"
import parecerista from "../../assets/editalPage/parecerista.png"
import publicado from "../../assets/editalPage/publicado.png"
import { FileText, Lightbulb, Download, PencilSquare} from "react-bootstrap-icons"
import Header from "../../components/Header";
import { Button } from "react-bootstrap";

const PublicNotice = ({ title, image, registrationDetails }) => {
    return (
        <>
            <Header userName="Ana Silva" />
            <Container>
                <SectionOne>
                    <Title>
                        <FileIcon>
                            <FileText />
                            <span>FUNCULTURA 2023</span>
                        </FileIcon>
                        <LampIcon>
                            <Lightbulb />
                            <span>Edital</span>
                        </LampIcon>
                        <p>EDITAL DE CREDENCIAMENTO DE PARECERISTAS FUNCULTURA - 2023</p>
                    </Title>
                    <Image>
                        <img src={parecerista} alt="Capa do edital de pareceristas." />
                    </Image>
                </SectionOne>

                <SectionTwo>
                    <article>
                        <div>
                            <img src={publicado} alt="Logo Secretaria de Cultura." />
                            <div>
                                <p><b>Publicado por </b></p>
                                <a href="https://www.mapacultural.pe.gov.br/agente/11/">Secretaria de Cultura do Estado de Pernambuco</a>
                            </div>
                            <div>
                                <Button variant="secondary" size="sm"><Download />Anexos</Button>
                            </div>
                        </div>
                        

                        <p><b>PARA SUPORTE TÉCNICO ENTRAR EM CONTATO ATRAVÉS DO WHATSAPP (81) 3184-3018.</b></p>

                        <ul>SELECIONE:
                            <li>OPÇÃO 1: CONTINUAR O ATENDIMENTO;</li>
                            <li>OPÇÃO 2: CONTATO COM O MAPA CULTURAL.</li>
                        </ul>

                        <ul>TENHA EM MÃOS:
                            <li>NOME COMPLETO,</li>
                            <li>EMAIL,</li>
                            <li>CPF,</li>
                            <li>NOME DO EDITAL/OPORTUNIDADE,</li>
                            <li>NUMERO DE INSCRIÇÃO.</li>
                        </ul>

                    </article>
                </SectionTwo>
                <SectionThree>
                    <article>
                        <div>
                            <PencilSquare/>
                        </div>
                        <h3>Inscrições abertas</h3>
                        <p>O objetivo deste edital é a seleção e o credenciamento de profissionais, pessoas físicas e/ou Microempreendedores Individuais – MEI, residentes ou não em Pernambuco, para compor o Banco de Pareceristas, que possam vir a exercer as atividades de análise, classificação e emissão de parecer técnico sobre projetos culturais no âmbito dos Editais do Fundo Pernambucano de Incentivo à Cultura - Funcultura, desde que atendidos os requisitos descritos neste Instrumento Convocatório, visando à futura e eventual contratação dos mesmos.</p>
                    </article>   
                    <div>
                        <button class="botão1" variant="secondary" size="sm"><Download />Baixar o regulamento</button>
                        <button class="botão2">Inscreva-se</button>    
                    </div>
                </SectionThree>

            </Container>
        </>
    )
}

export default PublicNotice;
