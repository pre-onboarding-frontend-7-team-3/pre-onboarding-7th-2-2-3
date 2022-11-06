import { useState } from "react";
import styled from "styled-components";
import { centerize } from "shared/global.style";
import DropDown from "components/dropDown";
import { menuItems } from "constants/menuItems";

function Graph() {
  return (
    <>
      <NavWrapper>
        <XAxisIndexWrapper>
          <DropDown prefixIcon="🔵" first menuItems={menuItems} />
          <DropDown prefixIcon="🟢" second menuItems={menuItems} />
        </XAxisIndexWrapper>
        <DropDown standard second menuItems={menuItems} />
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.section`
  ${centerize}
  justify-content: space-between;
`;

const XAxisIndexWrapper = styled.div`
  ${centerize}
`;

export default Graph;
