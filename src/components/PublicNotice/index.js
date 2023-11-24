import {
  Container,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Title,
  Image,
  FileIcon,
  LampIcon,
} from "./styled";
import publicado from "../../assets/editalPage/publicado.png";
import {
  FileText,
  Lightbulb,
  Download,
  PencilSquare,
} from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { editalCard } from "../Card/editalCard";
import { useNavigate } from "react-router";

const PublicNotice = () => {
  const id = window.location.pathname.split("/").pop();
  const navigate = useNavigate();

  return (
    <Container>
      {editalCard.map((item) => {
        if (id.includes(item.id)) {
          return (
            <>
              <SectionOne key={item.id}>
                <Title>
                  <FileIcon>
                    <FileText />
                    <span>FUNCULTURA 2023</span>
                  </FileIcon>
                  <LampIcon>
                    <Lightbulb />
                    <span>Edital</span>
                  </LampIcon>
                  <p>{item.description}</p>
                </Title>
                <Image>
                  <img src={item.image} alt={item.text} />
                </Image>
              </SectionOne>
              <SectionTwo>
                <div>
                  <img src={publicado} alt="Logo Secretaria de Cultura." />
                  <div>
                    <p>
                      <b>Publicado por </b>
                    </p>
                    <a href="https://www.mapacultural.pe.gov.br/agente/11/">
                      Secretaria de Cultura do Estado de Pernambuco
                    </a>
                  </div>
                </div>
                <div>
                  <Button variant="secondary" size="sm">
                    <Download />
                    Anexos
                  </Button>
                </div>
              </SectionTwo>
            </>
          );
        }
        return null;
      })}

      <SectionThree>
        <article>
          <p>
            <b>
              PARA SUPORTE TÉCNICO ENTRAR EM CONTATO ATRAVÉS DO WHATSAPP (81)
              3184-3018.
            </b>
          </p>

          <ul>
            SELECIONE:
            <li>OPÇÃO 1: CONTINUAR O ATENDIMENTO;</li>
            <li>OPÇÃO 2: CONTATO COM O MAPA CULTURAL.</li>
          </ul>

          <ul>
            TENHA EM MÃOS:
            <li>NOME COMPLETO,</li>
            <li>EMAIL,</li>
            <li>CPF,</li>
            <li>NOME DO EDITAL/OPORTUNIDADE,</li>
            <li>NUMERO DE INSCRIÇÃO.</li>
          </ul>
        </article>
      </SectionThree>
      <SectionFour>
        <article>
          <div>
            <h3>Inscrições abertas</h3>
            <PencilSquare />
          </div>
          <p>
            O objetivo deste edital é a seleção e o credenciamento de
            profissionais, pessoas físicas e/ou Microempreendedores Individuais
            – MEI, residentes ou não em Pernambuco, para este edital, desde que atendidos os requisitos descritos neste
            Instrumento Convocatório, visando à futura e eventual contratação
            dos mesmos.
          </p>
        </article>
        <div className="buttons">
          <button className="button1" variant="secondary" size="sm">
            <Download />
            Baixar o regulamento
          </button>
          {editalCard.map((item) => {
            if (id.includes(item.id)) {
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(`/form/${item.id}`)}
                  className="button2"
                >
                  Inscreva-se
                </button>
              );
            }
            return null;
          })}
        </div>
      </SectionFour>
    </Container>
  );
};

export default PublicNotice;
