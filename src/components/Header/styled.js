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
    height: 100px;
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
