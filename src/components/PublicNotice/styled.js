import styled from "styled-components";

export const Container = styled.div`
  width: 100wv;
  margin: 0;
  padding: 100px;
`;

export const SectionOne = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    font-weight: 600;
    line-height: 1.3;
    width: 240px;
    word-break: break-word;
    word-spacing: 4px;
    font-style: italic;
  }
`;

export const Image = styled.div`
  width: 45%;
  > img {
    width: 100%;
    height: 300px;
  }
`;

export const FileIcon = styled.div`
  color: #a0a0a0;
  display: flex;
  gap: 0.4rem;
  line-height: 1.3;
`;

export const LampIcon = styled.div`
  color: #ffa500;
  display: flex;
  gap: 0.4rem;
`;

export const SectionTwo = styled.div`
  a {
    color: #000000;
  }

  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  justify-content: space-between;
  div {
    display: flex;
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      p {
        margin-bottom: 0.1rem;
      }
    }
  }

  div:nth-child(2) {
    button {
      background-color: #011a3f;
      border: none;
      font-weight: bold;
      border-radius: 50px;
      padding: 0 20px;
      height: 40px;
    }
    svg {
      margin-right: 20px;
    }
  }
`;

export const SectionThree = styled.div`
  margin-top: 1.25rem;
  ul {
    font-weight: bold;
  }
  li {
    font-weight: 500;
  }
  li,
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const SectionFour = styled.div`
  article {
    background-color: #d9d9d9;
    padding: 30px;
    margin-top: 3rem;
    div {
      display: flex;
      justify-content: space-between;
      svg {
        width: 40px;
        height: 30px;
      }
      h3 {
        font-family: Source Sans 3;
        font-weight: bold;
        color: #011a3f;
      }
    }

    p {
      margin-top: 20px 15px 0 0;
      font-style: italic;
      text-align: justify;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    margin-top: 3rem;
    button {
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: 50px;
    }
    svg {
      margin-right: 0.625rem;
    }
    .button1 {
      color: #ffffff;
      background-color: #e31f28;
      font-weight: bold;
    }
    .button2 {
      color: #ffffff;
      background-color: #011a3f;
      font-weight: bold;
    }
  }
`;
