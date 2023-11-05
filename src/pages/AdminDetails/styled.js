import styled from "styled-components";


export const WrapDoc = styled.div`
  margin: 0 auto;
  width: 80%;
  h1 {
    margin: 1.5rem 0;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  button {
    border-radius: 50px;
    background-color: #f2f4ff;
    border: none;
    color: #1d275f;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const WrapCard = styled.div`
  div {
    margin: 0 auto 1.4rem 0;
    padding: 0;
  }
`;

export const WrapInscription = styled.div`
  margin: 0 auto;
  width: 80%;
  h1 {
    margin: 1.5rem 0 0 0;
  }
  .dropdown {
    margin-bottom: 5rem;
  }
  .b1 {
    font-size: 25px;
    padding: 10px 55px;
    border-radius: 50px;
    border-color: #3d37f1;
    color: #3d37f1;
    background-color: white;
  }
`;

export const Documentations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  h1{
    margin: 1.5rem 0;
  }
  select{
    border: solid 1px black;
    font-weight: 600;
  }
  table{
    text-align: center;
    border: solid 2px grey;
    width: 99%;
    tr{
      border-bottom: solid 1px black;
    }
    td{
      padding: 0.625rem 0;
      width: 30%;
    }
  }
}
`;
