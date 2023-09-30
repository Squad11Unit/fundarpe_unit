import { useNavigate } from "react-router";
import { HeaderContainer, InitialOptions } from "./styled";
import logoheader from "../../Assets/logoheader.png";
import { BsGear } from "react-icons/bs";

function Header() {
  const navigate = useNavigate();
  const ClearAll = () => {
    window.localStorage.removeItem("User");
    navigate("/");
  };
  return window.localStorage.getItem("User") ? (
    <HeaderContainer>
      <img src={logoheader} alt="Logo do Funcultura" />
      <InitialOptions>
        <p>Instituições</p>
        <p>Ana Silva</p>
        <BsGear onClick={() => ClearAll()}/>
      </InitialOptions>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <img src={logoheader} alt="Logo do Funcultura" />
      <InitialOptions>
        <p>Instituições</p>
        <a href="/login">Iniciar Sessão</a>
        <button onClick={() => navigate("/cadastro")}>Registrar-se</button>
      </InitialOptions>
    </HeaderContainer>
  );
}

export default Header;
