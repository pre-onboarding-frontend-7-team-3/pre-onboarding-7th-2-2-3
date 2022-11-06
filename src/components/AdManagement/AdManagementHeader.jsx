import { useState } from "react";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { AD_MANAGEMENT_DATA } from "constants/AdManagementSelecData";
import { CREATE_AD } from "constants/AdManagementSelecData";

const AdManagementHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const [adStatus, setAdStatus] = useState(AD_MANAGEMENT_DATA[0].name);

  const handleChange = (e) => {
    setAdStatus(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            width: "130px",
            height: "40px",
            borderRadius: "10px",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          {AD_MANAGEMENT_DATA.map(({ name }, idx) => (
            <MenuItem
              key={idx}
              value={name}
              sx={{
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          width: "108px",
          height: "40px",
          padding: "12px 20px",
          color: "#FFFFFF",
          backgroundColor: `"#586CF5"`,
          borderRadius: "10px",
        }}
      >
        {CREATE_AD}
      </Button>
    </Box>
  );
};

export default AdManagementHeader;
