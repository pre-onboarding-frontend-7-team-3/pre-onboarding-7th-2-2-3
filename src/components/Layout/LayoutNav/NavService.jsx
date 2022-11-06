import React, { useState } from "react";
import styled from "@emotion/styled";

import { SERVICE_TYPE } from "constants/ServiceType";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 230px;

  margin: 0 10px 50px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 5px;
  margin: 0 0 10px 10px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #94a2ad;
`;

const NavService = () => {
  const [option, setOption] = useState("매드업");
  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <Wrapper>
      <TitleWrapper>서비스</TitleWrapper>
      <FormControl size="medium" sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
        <Select
          onChange={handleChange}
          value={option}
          inputProps={{ "aria-label": "Without label" }}
        >
          {SERVICE_TYPE.map(({ text }, idx) => (
            <MenuItem key={idx} value={text}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default NavService;
