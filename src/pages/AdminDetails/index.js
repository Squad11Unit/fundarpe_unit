import Header from "../../components/Header";
import banner from "../../assets/adminProfile/banner.png";
import avatar from "../../assets/adminProfile/avatar.jpg";
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

function AdminDetails() {
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
            <ThTwo>Inscrições</ThTwo>
            <ThTree>Notificações</ThTree>
            <ThFour>Pareceristas</ThFour>
            <ThFive>Documentações</ThFive>
          </tr>
        </Table>
      </ContainerTable>
    </div>
  );
}

export default AdminDetails;
