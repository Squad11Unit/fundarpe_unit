import styled from "styled-components";

export const ContainerHome = styled.body`
  h1 {
    margin: 60px 0 15px 140px;
  }
  button {
    font-size: 25px;
    padding: 10px 55px;
    border-radius: 50px;
    border-color: #3d37f1;
    color: #3d37f1;
    background-color: white;
    margin: 0 41vw;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 140px;
  gap: 15px;
  button {
    border-radius: 50px;
    background-color: #f2f4ff;
    border: none;
    padding-right: 10px;
    color: #1d275f;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  margin: 50px 140px;
`;
