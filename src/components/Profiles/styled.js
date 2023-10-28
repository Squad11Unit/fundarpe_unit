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