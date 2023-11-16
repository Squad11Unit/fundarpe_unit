import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 90px;
  width: 100%;
  background-color: #011a3f;
  color: #fdfeff;
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 115px;
  align-items: center;
  img {
    cursor: pointer;
    height: 100px;
  }
  @media only screen and (max-device-width: 425px) {
    a {
      font-size: 1rem;
    }
    img {
      height: 40px;
    }
    button {
      font-size: 0.8rem;
    }
    padding: 1rem 0;
    gap: 0.3rem;
  }
`;

export const InitialOptions = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 20px;
  svg {
    height: 25px;
    width: 25px;
  }
  a {
    text-decoration: none;
    color: #fdfeff;
  }
  button {
    border-radius: 50px;
    background-color: #e31f28;
    color: #fdfeff;
    padding: 10px 20px;
  }
`;
