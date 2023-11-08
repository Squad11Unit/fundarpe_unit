import React, { useState } from "react";
import { cpfCnpjMask, validatePassword } from "../../Utils/validations";
import { useNavigate } from "react-router-dom";
import { ContainerLogin, ReCaptcha, Acessos } from "./styled";
import Header from "../../components/Header";
import LoginAdm from "./LoginAdm";
import reCaptcha from "../../assets/Form/reCaptcha.png";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer";

const Login = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cpfCnpj, setCpfCnpj] = useState("");
  
  const [agente, setAgente] = useState(true);

  const navigate = useNavigate();

  const expireTime = 1000;

  const showAgenteLogin = () => {
    setAgente(true);
  };

  const showAdminLogin = () => {
    setAgente(false);
  };

  const handleSubmitUser = async (event) => {
    event.preventDefault();
    const user = { cpf: cpfCnpj, password: form.password };

    localStorage.setItem("User", JSON.stringify({ user, expireTime }));
    console.log(user);

    try {
      setLoading(true);
      if (form.password) {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCpfCnpj = (event, type) => {
    setCpfCnpj(cpfCnpjMask(event.target.value));
  };

  const handlerChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const InputValidator = () => {
    return validatePassword(form.password) && cpfCnpj.length > 10;
  };
  const isUserLoggedIn = localStorage.getItem("User") ||
  localStorage.getItem("Administrador");
  if (isUserLoggedIn){
    window.location = "./"
  }

  return !(localStorage.getItem("User") ||
  localStorage.getItem("Administrador")) ? (
    <>
      <Header />
      <ContainerLogin>
        <Acessos>
          <h4
            onClick={showAgenteLogin}
            style={{ color: agente ? "black" : "#c3c3c3" }}
          >
            Acesso Agente
          </h4>
          <h4
            onClick={showAdminLogin}
            style={{ color: !agente ? "black" : "#c3c3c3" }}
          >
            Acesso Administrador
          </h4>
        </Acessos>
        {agente ? (
          <form onSubmit={handleSubmitUser}>
            <div>
              <Form.Control
                type="tel"
                value={cpfCnpj}
                required
                name={"cpfCnpj"}
                placeholder={"CPF/CNPJ"}
                onChange={handleCpfCnpj}
                maxLength={18}
              />

              <Form.Control
                type={"password"}
                name={"password"}
                value={form.password}
                required
                placeholder={"Senha"}
                onChange={handlerChange}
              />
              <p>Esqueci minha senha </p>

              <ReCaptcha>
                <input type="checkbox" required />
                <span>Não sou um robô</span>
                <img style={{ width: "100px" }} src={reCaptcha} alt="logo" />
              </ReCaptcha>

              <button type="submit" disabled={!InputValidator() || loading}>
                Entrar
              </button>
              <a href="/cadastro">Cadastre-se</a>
            </div>
          </form>
        ) : (
          <LoginAdm />
        )}
      </ContainerLogin>
        <Footer />
    </>
  ):(
    <></>
  );
};

export default Login;
