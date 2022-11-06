import { Box } from "@mui/material";

const Header = () => {
  const USER_NAME = "원티드";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "80px",
        margin: "0 40px",
        borderBottom: "1px solid #EDEFF1",
      }}
    >
      <Box>{USER_NAME}님</Box>
    </Box>
  );
};

export default Header;
