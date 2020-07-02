import styled from "styled-components";

import backgroundImg from "../images/backgroundImg.png";

const StyledDash = styled.div`
  text-align:center;
  height: 100vh;
  text-shadow: 1px 1px #181212;
  display: block;
  width: 100%;
  background-image: url(${backgroundImg});

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      width: 10%;
      padding: 2%;
      text-decoration: none;
      text-shadow: 1px 2px #181212;
      font-size: 1.8vw;
      font-weight: bold;
      text-align: center;
      &:hover {
        color: #e8964a;
      }
      @media (max-width: 500px) {
        font-size: 0.5rem;
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 825px) {
        font-size: 1rem;
      }
    }
  }

  p {
    text-shadow:none;
    font-weight:bold;
  }
  .button {
    &:hover {
      background-color: #181212;
      color: #e8964a;
    }
  }
`;

export default StyledDash;
