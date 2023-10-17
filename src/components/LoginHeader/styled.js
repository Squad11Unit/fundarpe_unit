import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
  img {
    width: 200px;
    height: 115px;
  }
  p {
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
  }
`;

export const SocialGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  a {
    border: solid 1px #ec2646;
    border-radius: 50px;
    padding: 15px;
    svg {
      width: 25px;
      height: 25px;
      color: #5353ec;
    }
  }
  div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 15px;
    border: solid 1px #ec2646;
    border-radius: 50px;
    padding: 5px 20px 0;
    img {
      margin-bottom: 12px;
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 16px;
      color: #ec2646;
      font-weight: 600;
    }
  }
`;
