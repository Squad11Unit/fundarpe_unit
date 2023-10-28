import styled from "styled-components";

export const ContainerHome = styled.body`
  h1 {
    margin: 60px 0 15px 140px;
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
    gap: -20px;
    margin: 100px 180px;
  }
  .flex_section {
    display: flex;
  }
  .flex_imag {
    display: column;
  }
  .color {
    background-color: #f16226;
    flex-direction: column!;
    border-radius: 0 0 5px 5px;
    height: 170px;
  }
  h2 {
    color: #ffff;
    padding: 30px 30px 0;
  }
  h4 {
    color: #ffff;
    padding: 0 29px 2px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
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
