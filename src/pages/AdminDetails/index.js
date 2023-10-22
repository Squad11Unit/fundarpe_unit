import Header from "../../components/Header";
import banner from "../../assets/adminProfile/banner.png";
import avatar from "../../assets/adminProfile/avatar.jpg";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  Banner,
  ContainerTable,
  ProfilePicture,
  Images,
  Description,
  Table,
  ThOne,
  ThTwo,
  ThTree,
  ThFour,
  ThFive,
} from "./styled";
import { PencilSquare, PeopleFill } from "react-bootstrap-icons";
import { CardBox, SelectGroup } from "../Home/styled";
import CardHome from "../../components/Card";
import { editalCard } from "../../components/Card/editalCard";
import { categorias, meses } from "../Home/constants";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Form from "react-bootstrap/Form";

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
      <Banner
        src={banner}
        alt="Rostos de duas pessoas com máscaras e chapéu coloridos no carnaval"
      />
      <Images>
        <ProfilePicture src={avatar} alt="Foto de perfil do usuário" />
        <PencilSquare />
      </Images>
      <Description>
        <h1>Roberto Silva</h1>
        <div>
          <PeopleFill />
          <p>MÚSICO PERNAMBUCANO</p>
        </div>
        <div>
          <PencilSquare />
          <p>Editar</p>
        </div>
      </Description>
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
        <div>
          <Form.Select size="lg">
            <option>Renovação PCP</option>
          </Form.Select>
          <table>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
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
        </div>
      )}
    </div>
  );
}

export default AdminDetails;
