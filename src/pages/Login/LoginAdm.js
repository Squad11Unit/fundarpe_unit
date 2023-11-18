import { ContainerLogin, ReCaptcha } from "./styled";
import { useNavigate } from "react-router-dom";
import reCaptcha from "../../assets/Form/reCaptcha.png";
import { useState } from "react";
import { validatePassword } from "../../Utils/validations";
import { Form } from "react-bootstrap";

function LoginAdm() {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matricula, setMatricula] = useState("");

  const navigate = useNavigate();

  const expireTime = 1000;

  const handleSubmitUserAdm = async (event) => {
    event.preventDefault();
    const adm = { matricula: matricula, password: form.password };

    localStorage.setItem("Administrador", JSON.stringify({ adm, expireTime }));

    try {
      setLoading(true);
      if (form.password) {
        navigate("/admin");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMatricula = (event) => {
    setMatricula(event.target.value);
  };

  const handlerChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const InputValidator = () => {
    return validatePassword(form.password) && matricula.length > 4;
  };

  return (
    <ContainerLogin>
      <form onSubmit={handleSubmitUserAdm}>
        <div>
          <Form.Control
            type="tel"
            value={matricula}
            name={"matricula"}
            placeholder={"Matrícula"}
            onChange={handleMatricula}
            required
            maxLength={11}
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
    </ContainerLogin>
  );
}

export default LoginAdm;
