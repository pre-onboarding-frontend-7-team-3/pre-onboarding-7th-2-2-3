import { css } from "styled-components";

const theme = {
  bg: {
    black: "#000000",
    grey: "#D1D8DC",
    blue: "#586CF5",
    white: "#FFFFFF",
  },
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexDefault: css`
    display: flex;
    align-items: center;
  `,
  border: {
    bottom: "1px solid #000000",
  },
  padding: "1.3rem",
};

export default theme;
