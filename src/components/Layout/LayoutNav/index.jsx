import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import NavService from "./NavService";
import NavAdCenter from "./NavAdCenter";
import NavGuide from "./NavGuide";
import NavFooter from "./NavFooter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 320px;
  height: 100%;
`;

const NavLogo = styled.img`
  width: 124px;

  margin: 40px 60px 100px 0;

  cursor: pointer;
`;

const LayoutNav = () => {
  return (
    <Wrapper>
      <Link to="/">
        <NavLogo src="/LEVER_LOGO.png" alt="COMPANY_LOGO" />
      </Link>
      <NavService />
      <NavAdCenter />
      <NavGuide />
      <NavFooter />
    </Wrapper>
  );
};

export default LayoutNav;
