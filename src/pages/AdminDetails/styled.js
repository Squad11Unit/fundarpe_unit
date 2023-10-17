import styled from "styled-components";

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
  margin: -120px 0 0 35%;
  h1{
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
    p{
        font-size: 20px;
        line-height: 20px;
        margin-top: 0.3rem;
    }
  }
`;
