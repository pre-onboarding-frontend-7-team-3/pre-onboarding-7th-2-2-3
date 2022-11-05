import { Box } from "@mui/material";

const PageHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "80px",
        margin: "0 40px",
        borderBottom: "1px solid #EDEFF1",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "26px",
        color: '#3A474E',
      }}
    >
      {title}
    </Box>
  );
};

export default PageHeader;
