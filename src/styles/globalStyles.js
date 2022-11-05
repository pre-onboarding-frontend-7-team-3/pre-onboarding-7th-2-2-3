import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "Roboto";
  }

  html,
  body,
  #root {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyles;
