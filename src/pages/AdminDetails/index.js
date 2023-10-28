import Header from "../../components/Header";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  ContainerTable,
  Table,
  ThOne,
  ThTwo,
  ThTree,
  ThFour,
  ThFive,
  Documentations,
} from "./styled";
import { CardBox, SelectGroup } from "../Home/styled";
import CardHome from "../../components/Card";
import { editalCard } from "../../components/Card/editalCard";
import { categorias, meses } from "../Home/constants";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import ProfileHeaders from "../../components/Profiles/header";

function AdminDetails() {
  const [inscricoes, setIncricoes] = useState(true);
  const [documentacoes, setDocumentacoes] = useState(true);

  const mostrarCard = () => {
    setIncricoes(true);
  };
  const mostrarDoc = () => {
    setIncricoes(false);
  };

  return (
    <div>
      <Header userName="Roberto Silva" />
      <ProfileHeaders />
      <ContainerTable>
        <Table>
          <tr>
            <ThOne>E-mail</ThOne>
            <ThTwo
              onClick={mostrarCard}
              style={{ backgroundColor: inscricoes ? "#f8e6d1" : "#00fffff" }}
            >
              Inscrições
            </ThTwo>
            <ThTree>Notificações</ThTree>
            <ThFour>Pareceristas</ThFour>
            <ThFive
              onClick={mostrarDoc}
              style={{ backgroundColor: !inscricoes ? "#f8e6d1" : "#00fffff" }}
            >
              Documentações
            </ThFive>
          </tr>
        </Table>
      </ContainerTable>
      {inscricoes && (
        <>
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
        </>
      )}
      {!inscricoes && (
        <Documentations>
          <h1>Documentação</h1>
          <Form.Select size="lg">
            <option>Renovação PCP</option>
          </Form.Select>
          <table>
            <tr>
              <td>bella.lima@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>maria.souza@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>leandro.neto@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>Lucas.bento@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>kelly.oliveira@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>ella.lira@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>hellan.pinho@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
            <tr>
              <td>bruno.camara@email.com</td>
              <td>CPF: xxx - xxx - xxx - xx</td>
              <td>Matricula :000000261</td>
            </tr>
          </table>
        </Documentations>
      )}
    </div>
  );
}

export default AdminDetails;
