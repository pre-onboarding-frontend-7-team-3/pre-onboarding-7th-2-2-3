import { COLOR } from "constants/style";
import React from "react";
import Icon from "shared/icon/Icon";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <Icon icon="AlertIcon" size={30} />
      <IconContainer>
        <Icon icon="SettingIcon" size={30} />
      </IconContainer>
      <ProfileContainer>
        <Icon icon="ProfileIcon" size={30} />
        <ProfileName>원티드님</ProfileName>
      </ProfileContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${COLOR.Gray100};
  width: calc(100vw - 320px);
  height: 80px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const IconContainer = styled.div`
  margin-left: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 80px;
`;

const ProfileName = styled.div`
  margin-left: 10px;
`;

export default Navbar;
