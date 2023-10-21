import { useState } from "react";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header";
import LoginHeader from "../../components/LoginHeader";
import { Acessos } from "../Login/styled";
import { ContainerRegister } from "./styled";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [agente, setAgente] = useState(true);

  const navigate = useNavigate();

  const showAgenteRegister = () => {
    setAgente(true);
  };

  const showAdminRegister = () => {
    setAgente(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/login");
  }

 
  return (
    <div>
      <Header />
      <LoginHeader type="Cadastre-se" name="Cadastrar" />
      <ContainerRegister onSubmit={handleSubmit}>
        <h3>ou preencha seus dados</h3>

        <Acessos>
          <h4
            onClick={showAgenteRegister}
            style={{ color: agente ? "black" : "#c3c3c3" }}
          >
            Acesso Agente
          </h4>
          <h4
            onClick={showAdminRegister}
            style={{ color: !agente ? "black" : "#c3c3c3" }}
          >
            Acesso Administrador
          </h4>
        </Acessos>
          <Form.Control required size="lg" type="text" placeholder="Nome" />
          <Form.Control required type="text" size="lg" placeholder="Sobrenome" />
          <Form.Control required type="text" size="lg" placeholder="País de origem" />
          <Form.Control required type="text" size="lg" placeholder="CPF" />
          {!agente && (
            <Form.Control
              required
              type="text"
              size="lg"
              placeholder="Matrícula"
            />
          )}
          <Form.Label column lg={20}>
            Data de nascimento
          </Form.Label>
          <Form.Control
            required
            type="date"
            size="lg"
            placeholder="Data de nascimento"
          />
          <Form.Control required type="email" size="lg" placeholder="Email" />
          <Form.Control
            required
            type="password"
            size="lg"
            placeholder="Senha"
          />
          <span>Mínimo 6 caracteres. Utilize no mínimo uma letra maiúscula, uma minúscula, um caraceter especial e numeros.</span>
          <Form.Control
            required
            aria-required
            type="password"
            size="lg"
            placeholder="Repetir senha"
          />
          <Form.Check
            type="switch"
            id="costom-switch"
            label="Autorizo o Funcultura a enviar-me, por qualquer meio, comunicados comerciais e/ou de carácter acadêmico, de forma personalizada e que possam ser do meu interesse, pelo fato de ser usuário da plataforma."
          />
          <Form.Check
            type="switch"
            id="costom-switch"
            label="Autorizo o Funcultura a ceder os meus dados a instituições vinculadas a Secretatia de Cultura do Estado de Pernambuco."
          />
          <Form.Check
            required
           
            type="switch"
            id="costom-switch"
            label="Li e aceito a, Política de privacidade Condições gerais de utilização e Política de Cookies."
          />
          <button type="submit">Cadastre-se</button>
          <p>Já possui uma conta? <a href="/login">Inicie a sessão</a></p>
      </ContainerRegister>
    </div>
  );
};

export default Register;
