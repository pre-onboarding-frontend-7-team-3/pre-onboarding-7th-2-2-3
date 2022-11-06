import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
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

const Theme = {
  colors: {
    black: "#000000",
    grey: "#D9D9D9",
    blue: "#0094FF",
    white: "#fff",
  },
  border: {
    bottom: "1px solid #000000",
  },
  padding: "1.3rem",
};

const centerize = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Theme, centerize };
