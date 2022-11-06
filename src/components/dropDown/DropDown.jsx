import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

function DropDown({
  initValue,
  saveRecoilNavOption,
  menuItems,
  prefixIcon = "",
  standard,
  style = { m: 1, minWidth: 120 },
}) {
  const [option, setOption] = useState(initValue);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setOption(event.target.value);
    saveRecoilNavOption(selectedOption);
  };

  return (
    <>
      <FormControl variant={standard && "standard"} sx={style}>
        <Select
          autoWidth
          value={option}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {menuItems.map((menuItem, idx) => (
            <MenuItem key={idx} value={menuItem.value}>
              {prefixIcon} {menuItem.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default DropDown;
