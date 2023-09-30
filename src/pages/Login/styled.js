import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  form {
    width: 480px;
    display: flex;
    background-color: #fff;
  }
  form div {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    align-content: center;
    margin: 1rem auto;
  }
  form input[type="password" i] {
    width: 445px;
    align-self: center;
    font-size: 1.3rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    min-width: 300px;
    @media only screen and (max-device-width: 800px) {
      width: 40px;
    }
  }
  form input[type="tel" i] {
    width: 445px;
    font-size: 1.3rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    min-width: 300px;
    margin: auto;
    @media only screen and (max-device-width: 800px) {
      width: 250px !important;
    }
  }
  form input:focus {
    outline: none;
    border-color: gray;
  }
  form input::placeholder {
    color: #d3d3d3;
  }
  form p {
    margin: -1rem 295px 0 0;
    text-decoration: underline;
    font-weight: 600;
    @media only screen and (max-device-width: 800px) {
      margin-left: 15rem;
      width: 250px;
    }
  }
  form a {
    font-size: 1.3rem;
    color: black;
    font-weight: 600;
    text-decoration: none;
  }
  form button {
    width: 292px;
    padding: 0.8rem 1rem;
    margin: 1rem auto 0;
    border: none;
    border-radius: 1rem;
    background-color: #e31f28;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    font-size: 1.5rem;
  }
  form button:hover {
    filter: brightness(0.9);
  }
  form button:disabled {
    background-color: #d07684;
    cursor: not-allowed;
    @media only screen and (max-device-width: 800px) {
      width: 220px;
    }
  }
  form > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (max-device-width: 500px) {
    form {
    }
  }
`;

export const ReCaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 345px !important;
  margin: 1rem auto;
  width: 345px;
  height: 75px;
  font-size: 1.3rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  background-color: #f5f5f5;
  > input {
    width: 30px !important;
    height: 25px !important;
    min-width: 30px !important;
    margin-right: 1.2rem;
  }
  > span {
    font-size: 1.3rem;
  }
  @media only screen and (max-device-width: 800px) {
    width: 250px !important;
  }
`;

export const Acessos = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  > h4 {
    font-size: 1.3rem;
    cursor: pointer;
    margin: 0;
  }
  @media only screen and (max-device-width: 700px) {
    font-size: 1rem;
    gap: 1rem;
  }
`;
