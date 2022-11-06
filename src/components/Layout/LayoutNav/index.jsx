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

const LogoWrapper = styled.div`
  margin: 40px 60px 100px 0;
`;

const NavLogo = styled.img`
  width: 124px;

  cursor: pointer;
`;

const LayoutNav = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <NavLogo src="/LEVER_LOGO.png" alt="COMPANY_LOGO" />
        </Link>
      </LogoWrapper>

      <NavService />
      <NavAdCenter />
      <NavGuide />
      <NavFooter />
    </Wrapper>
  );
};

export default LayoutNav;
