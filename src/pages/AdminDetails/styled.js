import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 100%;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
`;

export const Table = styled.table`
  font-size: 20px;
  width: 90%;
  margin: 20px 0 20px 60px;
  th{
    width 15%;
    text-align: center;
  }
  th:hover {
    cursor: pointer;
  }
  @media only screen end (max-device-width: 768px){
    margin: 20px 0 20px 30px;
  };
  @media only screen end (max-device-width: 425px){
    margin: 0 0 0 10px;
    font-size: 15px;
  };
`;

export const ThOne = styled.th`
  border-left: solid 3px red;
`;
export const ThTwo = styled.th`
  border-left: solid 3px yellow;
`;
export const ThTree = styled.th`
  border-left: solid 3px green;
`;
export const ThFour = styled.th`
  border-left: solid 3px #5353ec;
`;
export const ThFive = styled.th`
  border-left: solid 3px blue;
  border-right: solid 3px orange;
`;

export const Documentations = styled.div`
  display-flex;
  flex-direction: column;
  justify-content: center;
  width: 50rem;
  margin: 0 auto;
  align-items: center;
  align-content: center;
  h1{
    margin: 1.5rem 0;
  }
  select{
    border: solid 1px black;
    width: 51rem
  }
  table{
    border: solid 1px black;
    padding: 0 3rem;
    width: 50rem;
    
    tr{
      border-bottom: solid 1px black;

    }
  }
  table, th, td{
    border-collapse: collapse;
    padding: 0.625rem 0;
}
`;

