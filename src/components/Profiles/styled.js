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
    @media only screen and (max-width: 768px) {
      margin: -50px 0 0 10px;
      width: 12.5rem;    
      height: 12.5rem;    
    }
    @media only screen and (max-width: 425px) {
      margin: -50px 0 0 10px;
      width: 9rem;    
      height: 9rem;    
    }
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
width: 31rem;  
display: flex;
  flex-direction: column;
  margin: 1rem 0;
  position: relative;
  left: 30rem;
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
  @media only screen and (max-device-width: 768px) {
    left: 15rem;
    margin: 0 0 0 0.625rem;
  }
  @media only screen and (max-device-width: 425px) {
    left: 12rem;
    margin: 0 0 0 1.875rem;
    width: 9rem;
  }
`;
