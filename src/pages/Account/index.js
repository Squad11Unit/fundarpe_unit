import Header from "../../components/Header";
import ProfileHeaders from "../../components/Profiles/header";
import avatarUser from "../../Assets/Profile/avatar-user.jpg";
import { NoticeSummary, Wrapper, Legend } from "./styled";
import cardEdital from "../../Assets/Profile/cardEdital.png";
import cardEdital2 from "../../Assets/Profile/pareceristaCard.png";
import { steps, stepsFinished } from "./constantsAccount";
import Footer from "../../components/Footer";
import {
  ContainerTable,
  Table,
  ThOne,
  ThTwo,
  ThTree,
  ThFour,
  ThFive,
} from "../AdminDetails/styled";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Account = () => {
  const [inscricoes, setIncricoes] = useState(true);
  const [documentacoes, setDocumentacoes] = useState(false);

  const mostarInscricao = () => {
    setIncricoes(true);
    setDocumentacoes(false);
  };

  const mostrarDoc = () => {
    setIncricoes(false);
    setDocumentacoes(true);
  };

  if (!localStorage.getItem("User")) {
    window.location.href = "/login";
  }

  return (
    <Wrapper>
      <Header userName="Ana Silva" />
      <ProfileHeaders
        photo={avatarUser}
        name="Ana Silva"
        occupation="ARTISTA PERNAMBUCANA"
        follow
      />
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <ThOne>Sobre</ThOne>
              <ThTwo
                onClick={mostarInscricao}
                style={{ backgroundColor: inscricoes ? "#f8e6d1" : "white" }}
              >
                Inscrições
              </ThTwo>
              <ThTree>Notificações</ThTree>
              <ThFour>Conexões</ThFour>
              <ThFive
                onClick={mostrarDoc}
                style={{ backgroundColor: documentacoes ? "#f8e6d1" : "white" }}
              >
                Documentações
              </ThFive>
            </tr>
          </thead>
        </Table>
      </ContainerTable>
      {inscricoes && (
        <>
          <h2>Inscrições</h2>
          <NoticeSummary>
            <img src={cardEdital} alt="Card do edital" />
            <div>
              <h3>FUNCULTURA GERAL 2022/2023</h3>
              <p>
                Colaborador acompanhe sua inscrição, desejamos-lhe boa sorte!
              </p>
            </div>
          </NoticeSummary>
          {steps.length >= 1 && (
            <>
              <div className="stepProgressBar st">
                {steps.map((step) => (
                  <div className="step" key={step.id}>
                    {step.status === "active" ? (
                      <div className="bullet completed" />
                    ) : (
                      <div className="bullet" />
                    )}
                    <div className="stepTitle">{step.title}</div>
                    <div className="stepSubtitle">
                      {step.status === "active" ? step.subTitle : ""}
                    </div>
                  </div>
                ))}
              </div>
              <Legend>
                <h3>Legenda</h3>
                <div>
                  <p />
                  <h6>Seu processo foi aprovado nessa etapa</h6>
                </div>
                <div>
                  <p className="wait" />
                  <h6>Seu processo ainda não entrou nessa etapa</h6>
                </div>
              </Legend>
            </>
          )}
          <h2>Histórico</h2>
          <NoticeSummary>
            <img src={cardEdital2} alt="Card do edital" />
            <div>
              <h3>EDITAL DE CREDENCIAMENTO DE PARECERISTA</h3>
              <p>
                Colaborador sua inscrição foi finalizada, desejamos-lhe boa
                sorte!
              </p>
            </div>
          </NoticeSummary>
          <div className="stepProgressBar st">
            {stepsFinished.map((step) => (
              <div className="step" key={step.title}>
                {step.status === "active" ? (
                  <div className="bullet completed" />
                ) : (
                  <div className="bullet" />
                )}
                <div className="stepTitle">{step.title}</div>
                <div className="stepSubtitle">
                  {step.status === "active" ? step.subtitle : ""}
                </div>
              </div>
            ))}
          </div>
          {steps.length <= 0 && (
            <Legend>
              <h3>Legenda</h3>
              <div>
                <p />
                <h6>Seu processo foi aprovado nessa etapa</h6>
              </div>
              <div>
                <p className="wait" />
                <h6>Seu processo ainda não entrou nessa etapa</h6>
              </div>
            </Legend>
          )}
        </>
      )}
      {documentacoes && (
        <div className="docMain">
          <h1 className="H1">Sua documentação</h1>
          <div className="documentationBox">
            <Form.Group>
              <Form.Label>Biografia</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Form.Select size="md">
              <option>Categoria e Subcategoria</option>
            </Form.Select>
            <Form.Select size="md">
              <option>Prestação de conta</option>
            </Form.Select>
            <Form.Select size="md">
              <option>Selecione o edital</option>
            </Form.Select>
            <Form.Select size="md">
              <option>Meus documentos</option>
            </Form.Select>
          </div>
          <p className="P first">Importante! voce so pode incluir um documento em cada lugar. </p>
          <p className="P">curriculum</p>
          <div className="grayBox">
            <span>Arraste ou selecione um documento max. 1 - max. 10 - MB formato PDF /DOC/ DOCX</span>
          </div>
          <div className="save">
            <button>Salvar alterações</button>
          </div>
        </div>
      )}
      <Footer />
    </Wrapper>
  );
};

export default Account;
