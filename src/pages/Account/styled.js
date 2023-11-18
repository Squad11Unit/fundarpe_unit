import styled from "styled-components";

export const Wrapper = styled.div`
  h2 {
    margin: 2rem 0 0 5rem;
    font-size: 2.25rem;
    clear: both;
  }
  .stepProgressBar {
    display: flex;
    justify-content: space-between;
    align-item: flex-start;
    width: 95%;
    margin: 4rem auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .step {
      text-align: center;
      width: 30%;
      position: relative;
    }
    .stepTitle {
      margin-bottom: 0.625rem;
      font-weight: 600;
      @media only screen and (max-device-width: 425px) {
        font-size: 0.9rem;
      }
    }
    .stepSubtitle {
      font-size: 0.8rem;
    }
    .bullet {
      background: #a0a0a0;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: inline-block;
      transition: background-color 500ms;
      line-height: 1.25rem;
    }
    .bullet.completed {
      background: #30ae61;
    }
    .bullet.completed::after {
      content: "_______________";
      color: #30ae61;
      font-size: 1.5rem;
      position: absolute;
      top: 0.5rem;
      left: 100%;
      transform: translate(-50%, -50%);
    }
    .bullet::after {
      content: "_______________";
      color: #a0a0a0;
      font-size: 1.5rem;
      position: absolute;
      top: 0.5rem;
      left: 100%;
      transform: translate(-50%, -50%);
    }
    .step:last-child .bullet::after {
      content: "";
    }
  }
  .docMain {
    padding: 0 5rem 3rem;
  }
  .H1 {
    margin: 2rem 0 2rem;
  }
  .documentationBox {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  .P{
    font-size: 0.9rem;
  }
  .P.first {
    margin-top: 2rem;
  }
  .grayBox{
    background: #D9D9D9;
    width: 32rem;
    height: 15rem;
    display: flex;
    align-items: center;
    span{
      padding-left: 1rem;
    }
  }
  .save{
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 1rem;
      font-weight: 600;
      background: #D9D9D9;

    }

  }
`;

export const NoticeSummary = styled.div`
  display: flex;
  gap: 2.8rem;
  justify-content: center;
  margin-top: 7.5rem;
  font-size: 2rem;
  h3 {
    font-weight: 700;
  }
  @media only screen and (max-device-width: 768px) {
    flex-direction: column;
  }
`;

export const Legend = styled.div`
  margin: 6rem 5rem 6rem 0;
  display: inline-flex;
  flex-direction: column;
  float: right;
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h6 {
    margin-top: 0.3rem;
  }
  div {
    display: flex;
    gap: 0.7rem;

    p {
      background: #30ae61;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
    .wait {
      background: #a0a0a0;
    }
  }
`;
