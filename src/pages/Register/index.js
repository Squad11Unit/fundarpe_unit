import { useState } from "react";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header";
import LoginHeader from "../../components/LoginHeader";
import { Acessos } from "../Login/styled";
import { ContainerRegister } from "./styled";
import { useNavigate } from "react-router-dom";
import { cpfCnpjMask, validatePassword } from "../../Utils/validations";

const Register = () => {
  const [agente, setAgente] = useState(true);
  const [form, setForm] = useState([]);
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  const showAgenteRegister = () => {
    setAgente(true);
  };

  const showAdminRegister = () => {
    setAgente(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleCPF = (event) => {
    setCpf(cpfCnpjMask(event.target.value))
  }

  const InputValidator = () => {
    return validatePassword(form.password)
  }

  const checkPassword = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

    const password = document.querySelector('input[name=password]')
    const check = document.querySelector('input[name=check]')

    if (check.value === password.value) {
      check.setCustomValidity('')
    } else {
      check.setCustomValidity("As senhas não conferem.")
    }

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
        <Form.Control required type="text" size="lg" placeholder="CPF/CNPJ" onChange={handleCPF} value={cpf} name={"cpf"} maxLength="14"/>
        {!agente && (
          <Form.Control
            required
            type="text"
            size="lg"
            placeholder="Matrícula"
            maxLength="11"
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
          name="password"
          value={form.password}
          size="lg"
          placeholder="Senha"
          onChange={checkPassword}
          maxLength={12}
        />
        <span>Mínimo 6 caracteres. Utilize no mínimo uma letra maiúscula, uma minúscula, um caraceter especial e numeros.</span>
        <Form.Control
          required
          aria-required
          type="password"
          size="lg"
          placeholder="Repetir senha"
          onChange={checkPassword}
          name="check"
          value={form.check}
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
        <button type="submit" disabled={!InputValidator()}>Cadastre-se</button>
        <p>Já possui uma conta? <a href="/login">Inicie a sessão</a></p>
      </ContainerRegister>
    </div>
  );
};

export default Register;
