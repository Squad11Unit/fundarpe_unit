import styled from "styled-components";

export const ContainerHome = styled.body`
  h1 {
    margin: 2rem 0 0 3rem;
  }
  .b1 {
    font-size: 25px;
    padding: 10px 55px;
    border-radius: 50px;
    border-color: #3d37f1;
    color: #3d37f1;
    background-color: white;
  }
  .flex_container {
    display: column;
    justify-content: center;
    margin: 4rem 4rem 0;
  }
  .flex_section {
    display: flex;
    justify-content: center;
    iframe {
      width: 100%;
    }
    @media only screen and (max-device-width: 425px){
      flex-direction: column;
    }
  }
  .flex_imag {
    display: column;
  }
  .color {
    background-color: #f16226;
    border-radius: 0 0 5px 5px;
    padding-bottom: 1.5rem;
  }
  h2.whiteh2 {
    color: #ffff;
    padding: 30px 30px 0;
  }
  h3 {
    color: #ffff;
    padding: 0 29px 2px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const SelectGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 3.5rem 4rem 0;
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
  margin: 0 3rem;
`;

export const AboutBox = styled.div`
  margin-top: 80px;
  @media only screen and (max-device-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: #011a3f;
    margin-left: 9.375rem;
    font-weight: 700;
    font-size: 2.813rem;
    @media only screen and (max-device-width: 1024px) {
      margin-left: 0.625rem;
      text-align: center;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3.125rem;
    img {
      @media only screen and (max-device-width: 425px) {
        width: 18.75rem;
      }
    }
    p {
      width: 50rem;
      padding: 2.188rem;
      border-radius: 0.313rem;
      font-size: 1.563rem;
      line-height: 2.188rem;
      text-align: justify;
      background-color: #ffffff;
      margin: 0.313rem 0 0 -1.875rem;
      box-shadow: 0.125rem 0.125rem 0.125rem 0.063rem #d3d3d3;

      @media only screen and (max-device-width: 1024px) {
        margin: 0 auto;
        box-shadow: none;
      }
    }
  }
`;
