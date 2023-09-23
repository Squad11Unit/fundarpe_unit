import { useNavigate } from "react-router";

const Header = () => {

  const navigate = useNavigate();


  const ClearAll = () => {
    window.localStorage.removeItem("User")
    navigate("/")
  }

  return (
    window.localStorage.getItem("User")
      ?
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <p>editais</p>
        <p>perfil</p>
        <button onClick={() => ClearAll()}>Sair</button>
      </header>
      :
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <a href="/login">Login</a>
        <a href="/cadastro">cadastro</a>

      </header>
  );
}

export default Header;