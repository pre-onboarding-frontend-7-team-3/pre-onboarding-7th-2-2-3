import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function DropDown({ menuItems, prefixIcon = "", standard, style = { m: 0, minWidth: 120 } }) {
  const [option, setOption] = useState(menuItems[0].text);

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <FormControl variant={standard && "standard"} sx={style}>
      <Select
        autoWidth
        value={option}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(text) => `${prefixIcon} ${text}`}
      >
        {menuItems.map((menuItem, idx) => (
          <MenuItem key={idx} value={menuItem.text}>
            {menuItem.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropDown;
