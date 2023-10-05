import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 65px;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.a`
  text-decoration: none;
  img {
    border-radius: 4%;
  }
`;

export const CardTitle = styled.div`
  text-align: center;
  font-size: 50px;
`;

export const Details = styled.div`
  align-items: center;
  display: flex;
  gap: 28px;
  margin: 28px 0px 10px 10px;
  height: 18vh;
  width: 2vw;
  font-weight: 700;
  font-size: 13.5px;
`;

export const Meses = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.95;
  margin: -12px;
  //border: solid 2px red;
`;
