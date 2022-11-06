import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "shared/icon/Icon";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "constants/style";

function SideMenu() {
  return (
    <>
      <ItemLabel>광고 센터</ItemLabel>
      <div>
        <StyledNavLink to="/">
          <ItemContainer>
            <Icon icon="AdIcon" size={30} />
            <ItemText>대시보드</ItemText>
          </ItemContainer>
        </StyledNavLink>
        <StyledNavLink to="/advertise">
          <ItemContainer>
            <Icon icon="DashboardIcon" size={30} />
            <ItemText>광고관리</ItemText>
          </ItemContainer>
        </StyledNavLink>
      </div>
    </>
  );
}

const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${COLOR.Blue100};
    svg {
      fill: ${COLOR.Blue100};
    }
  }
`;

const ItemLabel = styled.div`
  margin: 0 0 10px 10px;
  color: ${COLOR.Gray};
  font-weight: ${FONT_WEIGHT.medium};
  font-size: ${FONT_SIZE.small};
`;

const ItemContainer = styled.div`
  display: flex;
  padding: 15px 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${COLOR.Gray50};
  }
`;

const ItemText = styled.div`
  margin-top: 8px;
  margin-left: 10px;
  font-size: ${FONT_SIZE.Large};
  font-weight: ${FONT_WEIGHT.medium};
`;

export default SideMenu;
