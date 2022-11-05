import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {},
    body: {
      height: "100%",
      width: "100%",
    },
    button: {
      outline: "none",
      border: "none",
      margin: "0px",
      padding: "0px",
    },
    a: {
      textDecoration: "none",
      color: "#000000",
    },
  }),
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
