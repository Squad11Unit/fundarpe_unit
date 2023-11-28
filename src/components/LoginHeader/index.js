import { Wrapper, SocialGroup } from "./styled";
import logoFundarpe from "../../Assets/LoginHeader/logoFundarpe.png";
import google from "../../Assets/LoginHeader/google.jpg";
import { Facebook, Linkedin } from "react-bootstrap-icons";

function LoginHeader({ type, name }) {
  return (
    <Wrapper>
      <img src={logoFundarpe} alt="logo funcultura" />
      <p>{type} com seu perfil social </p>
      <SocialGroup>
        <div>
          <img src={google} alt="logo google" />
          <p>{name} com o google </p>
        </div>
        <a href="!#">
          <Facebook />
        </a>
        <a href="!#">
          <Linkedin />
        </a>
      </SocialGroup>
    </Wrapper>
  );
}

export default LoginHeader;
