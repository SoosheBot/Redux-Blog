import styled from "styled-components";
import backgroundImg from "../images/backgroundImg.jpg";

const Background = styled.div`

  display: block;  
  margin: 2rem, auto
background-image: url(${backgroundImg});
  width: 100%;
  height: 100%;

  background-size: cover;
  content: "";
  display: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.8;
`;

export default Background;
