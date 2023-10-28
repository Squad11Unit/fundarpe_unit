import { PencilSquare, PeopleFill } from "react-bootstrap-icons";
import banner from "../../assets/adminProfile/banner.png";
import avatar from "../../assets/adminProfile/avatar.jpg";
import { Banner, Description, Images, ProfilePicture } from "./styled";

const ProfileHeaders = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileHeaders;
