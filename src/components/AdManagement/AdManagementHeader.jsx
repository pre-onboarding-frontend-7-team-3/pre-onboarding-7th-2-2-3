import { useRecoilState } from "recoil";
import styled from "styled-components";

import { adListFilterState } from "store/adList";

import { AD_MANAGEMENT_DATA, CREATE_AD } from "constants/AdManagementSelectData";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const AdManagementHeader = () => {
  const [adListFilter, setAdListFilter] = useRecoilState(adListFilterState);

  const handleChange = (e) => {
    setAdListFilter(e.target.value);
  };

  const customStyle = {
    select: {
      width: "100px",
      height: "40px",
      borderRadius: "10px",
      fontWeight: "500",
      fontSize: "14px",
    },
    menuItem: {
      width: "100px",
      fontWeight: "500",
      fontSize: "14px",
    },
    button: {
      minWidth: "108px",
      height: "40px",
      padding: "12px 20px",
      color: "#FFFFFF",
      backgroundColor: `"#586CF5"`,
      borderRadius: "10px",
    },
  };

  return (
    <HeaderWrapper>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          onChange={handleChange}
          value={adListFilter}
          inputProps={{ "aria-label": "Without label" }}
          sx={customStyle.select}
        >
          {AD_MANAGEMENT_DATA.map(({ text }, idx) => (
            <MenuItem key={idx} value={text} sx={customStyle.menuItem}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" sx={customStyle.button}>
        {CREATE_AD}
      </Button>
    </HeaderWrapper>
  );
};

export default AdManagementHeader;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
  height: 80px;
  padding: 0 40px 0 0;
`;
