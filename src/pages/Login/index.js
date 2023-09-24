import React, { useState } from "react";
import { validateEmail, validatePassword } from "../../Utils/validations";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Forms/Input";

const Login = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email: form.email, password: form.password };

    localStorage.setItem("User", JSON.stringify(user));
    console.log(user);

    try {
      setLoading(true);
      if (form.email && form.password) {
        alert("Login realizado com sucesso!");
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const InputValidator = () => {
    return validateEmail(form.email) && validatePassword(form.password);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h1>Login</h1>

      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <Input
          label={"Email"}
          type={"email"}
          name={"email"}
          value={form.email}
          required
          placeholder={"Digite seu email"}
          onChange={handlerChange}
        />

        <Input
          label={"password"}
          type={"password"}
          name={"password"}
          value={form.password}
          required
          placeholder={"Digite sua senha"}
          onChange={handlerChange}
        />

        <button
          type="submit"
          disabled={!InputValidator() || loading}
        >
          Entrar
        </button>
      </div>

      <p>Não possui conta? </p>
      <a href="/cadastro">Cadastre-se</a>
    </form>
  );
};

export default Login;
