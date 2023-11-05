import {
  PencilSquare,
  PeopleFill,
  PersonPlusFill,
} from "react-bootstrap-icons";
import banner from "../../assets/Profile/banner.png";
import Button from "react-bootstrap/Button";
import {
  Banner,
  Description,
  Images,
  ProfilePicture,
  ContainerTable,
  Table,
  ThOne,
  ThTwo,
  ThTree,
  ThFour,
  ThFive,
} from "./styled";

const ProfileHeaders = ({
  photo,
  name,
  occupation,
  th1,
  th2,
  th3,
  th4,
  th5,
  whether1,
  whether5,
  click1,
  click5,
  follow,
}) => {
  return (
    <>
      <Banner
        src={banner}
        alt="Rostos de duas pessoas com máscaras e chapéu coloridos no carnaval"
      />
      <Images>
        <ProfilePicture src={photo} alt="Foto de perfil do usuário" />
        <div>
          {follow && (
            <Button variant="outline-dark">
              <PersonPlusFill />
              Seguir
            </Button>
          )}
          <PencilSquare />
        </div>
      </Images>
      <Description>
        <h1>{name}</h1>
        <div>
          <PeopleFill />
          <p>{occupation}</p>
        </div>
        <div>
          <PencilSquare />
          <p>Editar</p>
        </div>
      </Description>
      <ContainerTable>
        <Table>
          <tr>
            <ThOne>{th1}</ThOne>
            <ThTwo
              onClick={click1}
              style={{ backgroundColor: `${whether1} ? "#f8e6d1" : "white"` }}
            >
              {th2}
            </ThTwo>
            <ThTree>{th3}</ThTree>
            <ThFour>{th4}</ThFour>
            <ThFive
              onClick={click5}
              style={{ backgroundColor: `${whether5} ? "#f8e6d1" : "white"` }}
            >
              {th5}
            </ThFive>
          </tr>
        </Table>
      </ContainerTable>
    </>
  );
};

export default ProfileHeaders;
