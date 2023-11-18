import {
  PencilSquare,
  PeopleFill,
  PersonPlusFill,
} from "react-bootstrap-icons";
import banner from "../../assets/Profile/banner.png";
import Button from "react-bootstrap/Button";
import { Banner, Description, Images, ProfilePicture } from "./styled";

const ProfileHeaders = ({ photo, name, occupation, follow }) => {
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
    </>
  );
};

export default ProfileHeaders;
