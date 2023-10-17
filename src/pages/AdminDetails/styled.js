import styled from "styled-components";

export const Banner = styled.img`
  width: 100vw;
`;

export const ProfilePicture = styled.img`
  width: 275px;
  height: 265px;
  border-radius: 150px;
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -140px 0 0 175px;
  svg {
    margin: 100px 20px 0 0;
    color: white;
    width: 30px;
    height: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: -120px 0 0 36vw;
  h1 {
    margin-bottom: 20px;
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
`;

export const ContainerTable = styled.div`
  padding: 0 80px;
`;

export const Table = styled.table`
  font-size: 20px;
  width: 100vw;
  margin-top: 60px;
  
`;

export const ThOne = styled.th`
  border-left: solid 3px red;
  padding: 0 70px;
    width: 80%;
`;
export const ThTwo = styled.th`
  border-left: solid 3px yellow;
  padding: 0 70px;
    width: 80%;
`;
export const ThTree = styled.th`
  border-left: solid 3px green;
  padding: 0 70px;
    width: 80%;
`;
export const ThFour = styled.th`
  border-left: solid 3px #5353ec;
  padding: 0 70px;
    width: 80%;
`;
export const ThFive = styled.th`
  border-left: solid 3px blue;
  padding: 0 70px;
    width: 80%;
  border-right: solid 3px orange;
`;
