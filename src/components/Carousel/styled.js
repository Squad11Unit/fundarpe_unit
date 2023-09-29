import styled from "styled-components";

export const Container = styled.div`
width: 100%;  
img { 
  width: 100vw;
  height: 70vh !important;
  
}
h4, h5 {
  width: 100vw;
  text-align: left !important;
  line-height: 0.8;
}
p {
  margin-top: 1rem; 
  text-align: left !important;
  width: 62vw
}
h4, h5, p {
  margin-left: -6vw;
  @media only screen and (max-device-width: 500px) {
    font-size: 10px;
  }
  @media only screen and (max-device-width: 800px) {
    //border: solid 1px red;
    font-size: 11px;
    width: 120%;
    line-height: none;
  }
}
`;


