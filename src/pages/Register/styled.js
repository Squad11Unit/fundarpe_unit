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
    margin: -20px 0 -40px;
   }
   span {
    margin: -40px 0 -20px;
    padding-left: 5px;
    font-size:12px;
   }
   button {
    width: 292px;
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
  p{
    margin: 0 auto;
  }
`;