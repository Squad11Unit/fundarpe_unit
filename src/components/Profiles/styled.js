import styled from "styled-components";

export const Banner = styled.img`
  width: 100%;
`;

export const ProfilePicture = styled.img`
  width: 275px;
  height: 265px;
  border-radius: 150px;
`;

export const Images = styled.div`
  img {
    margin: -140px 0 0 175px;
  }
  div {
    text-align: end;
    margin: -11.25rem 1rem 0 0;
    button {
      color: white;
      border-color: white;
      height: 2.5rem;
      width: 8rem;
      svg {
        margin: 0 0.6rem 0 -0.3rem;
        width: 2.8rem;
        height: 1.8rem;
      }
    }
    svg {
      color: white;
      width: 2.5rem;
      height: 3rem;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: -120px 0 0 36rem;
  h1 {
    margin-bottom: 10px;
  }
  div {
    display: flex;
    align-content: center;
    gap: 10px;
    svg {
      width: 30px;
      height: 30px;
    }
    p {
      font-size: 20px;
      line-height: 20px;
      margin-top: 0.3rem;
    }
  }
  @media only screen and (min-device-width: 1399px) {
    margin: -12vh 0 50px 25vw;
  }
  @media only screen and (max-device-width: 1440px) {
    margin: -15vh 0 0 35vw;
  }
  @media only screen and (max-device-width: 1024px) {
    font-size: 15px;
    margin: -15vh 0 0 45vw;
  }
  @media only screen and (max-device-width: 768px) {
    margin: -15vw 0 0 60vw;
  }
  @media only screen and (max-device-width: 425px) {
    font-size: 10px;
    margin: 0 0 0 10px;
  }
`;
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