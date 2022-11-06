import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  body{
  font-family: Roboto;
  font-style: normal;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  li {
  list-style: none;
  }

  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const centerize = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, centerize };
