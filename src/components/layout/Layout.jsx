import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import SideNav from "components/sideNav/SideNav";
import Navbar from "components/Navbar/Navbar";

function Layout() {
  return (
    <LayoutContainer>
      <SideNav />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
`;

export default Layout;
