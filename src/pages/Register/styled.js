import styled from "styled-components";

export const ContainerRegister = styled.form`
   width: 500px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 40px; 
   text-align: justify;
   h3{
    text-align: center;
    font-weight: 700;
   }
   label {
    margin: -1.25rem 0 -2.5rem;
   }
   span {
    margin: -2.5rem 0 -1.5rem;
    padding-left: 0.313rem;
    font-size: 0.75rem;
   }
   button {
    width: 18.25rem;
    padding: 0.8rem 1rem;
    margin: 1rem auto 0;
    border: none;
    border-radius: 1rem;
    background-color: #e31f28;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    font-size: 1.5rem;
  }
  button:disabled {
    background-color: #d07684;
    cursor: not-allowed;
    @media only screen and (max-device-width: 800px) {
      width: 13.75rem;
    }
  }
  p{
    margin: 0 auto;
    font-weight: 700 ;
    margin-bottom: 1.25rem;
  }
  a{
    color: black;
    font-weight: 700 ;
  }
`;