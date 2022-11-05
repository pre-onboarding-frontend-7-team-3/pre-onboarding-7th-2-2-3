import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AD_MANAGEMENT } from "constants/SelectData";

const AdManagementSelect = () => {
  const [AdStatus, setAdStatus] = useState(AD_MANAGEMENT.ALL_ADS);

  const handleChange = (e) => {
    setAdStatus(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        onChange={handleChange}
        label={AdStatus}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={AD_MANAGEMENT.ALL_ADS}>{AD_MANAGEMENT.ALL_ADS}</MenuItem>
        <MenuItem value={AD_MANAGEMENT.ACTIVE_ADS}>{AD_MANAGEMENT.ACTIVE_ADS}</MenuItem>
        <MenuItem value={AD_MANAGEMENT.INACTIVE_ADS}>{AD_MANAGEMENT.INACTIVE_ADS}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AdManagementSelect;
