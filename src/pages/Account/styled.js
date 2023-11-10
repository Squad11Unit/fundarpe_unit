import styled from "styled-components";

export const Wrapper = styled.div`
  h2 {
    margin: 6rem 0 0 6rem;
    font-size: 2.25rem;
    clear: both;
  }
  .stepProgressBar {
    display: flex;
    justify-content: space-between;
    align-item: flex-start;
    width: 90%;
    margin: 4rem auto ;
    .step {
      text-align: center;
      width: 20%;
      position: relative;
    }
    .stepTitle {
      margin-bottom: 0.625rem;
      font-weight: 600;
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
    .wait{
      background: #A0A0A0;
    }
  }
`;
