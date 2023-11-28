import { useNavigate } from "react-router";
import { HeaderContainer, InitialOptions } from "./styled";
import logoheader from "../../Assets/logoheader.png";
import { FaEarDeaf, FaEyeSlash } from "react-icons/fa6";
import { FaSignLanguage } from "react-icons/fa";

function Header({
  userName,
  institutions,
  login,
  buttonLogout,
  buttonRegister,
}) {
  const navigate = useNavigate();
  const ClearAll = () => {
    localStorage.removeItem("User") || localStorage.removeItem("Administrador");
    navigate("/");
  };
  return localStorage.getItem("User") ||
    localStorage.getItem("Administrador") ? (
    <HeaderContainer>
      <img
        src={logoheader}
        alt="Logo do Funcultura"
        onClick={() => navigate("/")}
      />
      <InitialOptions>
        <FaEarDeaf/>
        <FaSignLanguage/>
        <FaEyeSlash/>
        <a href="https://www.cultura.pe.gov.br/fundarpe/" target="_blank" rel="noreferrer">{institutions}</a>
        <a href={localStorage.getItem("User") ? "/perfil" : "/admin"}>
          {userName}
        </a>
        {buttonLogout && (
          <button onClick={() => ClearAll()}>{buttonLogout}</button>
        )}
      </InitialOptions>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <img
        src={logoheader}
        alt="Logo do Funcultura"
        onClick={() => navigate("/")}
      />
      <InitialOptions>
        <a href="https://www.cultura.pe.gov.br/fundarpe/" target="_blank" rel="noreferrer">{institutions}</a>
        <a href="/login">{login}</a>
        {buttonRegister && (
          <button onClick={() => navigate("/cadastro")}>
            {buttonRegister}
          </button>
        )}
      </InitialOptions>
    </HeaderContainer>
  );
}

export default Header;
