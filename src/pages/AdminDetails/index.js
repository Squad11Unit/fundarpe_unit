import Header from "../../components/Header";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  Documentations,
  WrapInscription,
  WrapCard,
  SelectGroup,
  WrapDoc,
  Table,
  ContainerTable,
  ThOne,
  ThTwo,
  ThTree,
  ThFour,
  ThFive,
} from "./styled";
import { ButtonBox, CardBox } from "../Home/styled";
import CardHome from "../../components/Card";
import { editalCard } from "../../components/Card/editalCard";
import { categorias, meses } from "../Home/constants";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import ProfileHeaders from "../../components/Profiles/header";
import avatar from "../../assets/Profile/avatar.jpg";

function AdminDetails() {
  const [inscricoes, setIncricoes] = useState(true);
  const [documentacoes, setDocumentacoes] = useState(false);

  const mostrarCard = () => {
    setIncricoes(true);
    setDocumentacoes(false);
  };

  const mostrarDoc = () => {
    setIncricoes(false);
    setDocumentacoes(true);
  };

  return (
    <div>
      <Header userName="Roberto Silva" />
      <ProfileHeaders
        photo={avatar}
        name="Roberto Silva"
        occupation="MÚSICO PERNAMBUCANO"
      />
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <ThOne>E-mail</ThOne>
              <ThTwo
                onClick={mostrarCard}
                style={{ backgroundColor: inscricoes ? "#f8e6d1" : "white" }}
              >
                Inscrições
              </ThTwo>
              <ThTree>Notificações</ThTree>
              <ThFour>Pareceristas</ThFour>
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
        <WrapInscription>
          <h1>Inscrição</h1>
          <SelectGroup>
            <DropdownButton title="Mês">
              {meses.map((mes, index) => (
                <Dropdown.ItemText key={index}>{mes}</Dropdown.ItemText>
              ))}
            </DropdownButton>
            <DropdownButton title="Categoria do Edital">
              {categorias.map((categoria, index) => (
                <Dropdown.ItemText key={index}>{categoria}</Dropdown.ItemText>
              ))}
            </DropdownButton>
          </SelectGroup>
          <WrapCard>
            <CardBox>
              {editalCard.map((item) => (
                <CardHome
                  key={item.id}
                  URL={item.URL}
                  text={item.text}
                  title={item.title}
                  image={item.image}
                  month={item.month}
                  day={item.day}
                  description={item.description}
                />
              ))}
            </CardBox>
            <ButtonBox>
              <button className={"b1"}>Ver mais</button>
            </ButtonBox>
          </WrapCard>
        </WrapInscription>
      )}
      {documentacoes && (
        <WrapDoc>
          <Documentations>
            <h1>Documentação</h1>
            <Form.Select size="lg">
              <option>Renovação PCP</option>
            </Form.Select>
            <table>
              <tr>
                <td>bella.lima@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>maria.souza@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>leandro.neto@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>Lucas.bento@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>kelly.oliveira@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>ella.lira@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>hellan.pinho@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
              <tr>
                <td>bruno.camara@email.com</td>
                <td>CPF: xxx - xxx - xxx - xx</td>
                <td>Matricula: 000000261</td>
              </tr>
            </table>
          </Documentations>
        </WrapDoc>
      )}
    </div>
  );
}

export default AdminDetails;
