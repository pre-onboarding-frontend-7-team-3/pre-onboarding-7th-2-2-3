import React, { useEffect, useState, useRef } from "react";
import { SERVICE_MENU_ITEMS } from "constants/constants";
import _ from "lodash";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import SideMenu from "components/SideMenu";
import DropDown from "components/Dropdown";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "constants/style";
import { useOnClickOutside } from "hooks/useOnClickOutSide";
import Icon from "shared/icon/Icon";

function SideNav() {
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null);
  useOnClickOutside(navRef, () => {
    setIsToggled(false);
  });

  const handleResize = _.debounce(() => {
    if (window.innerWidth <= 768) {
      setIsToggled(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <HambargerBar
        isToggled={isToggled}
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <Icon icon="MobileIcon" size={30} />
      </HambargerBar>

      <SideNavContainer ref={navRef} isToggled={isToggled}>
        <div>
          <img src="images/main_logo.png" />
          <Divider sx={{ paddingTop: 7 }} />
          <SideNavItemContainer>
            <ItemLabel>서비스</ItemLabel>
            <DropDown first menuItems={SERVICE_MENU_ITEMS} />
          </SideNavItemContainer>
          <SideNavItemContainer>
            <SideMenu />
          </SideNavItemContainer>
        </div>
        <div>
          <SideNavGuideContainer>
            <img src="images/img_guide.png" />
            <GuideTextContainer>
              <GuideText>레버 이용 가이드</GuideText>
              <GuideSubText>시작하기 전에 알아보기</GuideSubText>
            </GuideTextContainer>
          </SideNavGuideContainer>
          <SideNavGuideTextContainer>
            <GuideExText>레버는 함께 만들어갑니다.</GuideExText>
            <GuideButton>이용약관</GuideButton>
          </SideNavGuideTextContainer>
        </div>
      </SideNavContainer>
    </>
  );
}

const HambargerBar = styled.div`
  width: 30px;
  position: absolute;
  top: 25px;
  left: 35px;
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (!props.isToggled ? "block" : "none")};
  }
`;

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  height: 100vh;
  padding: 50px 30px;
  @media (max-width: 768px) {
    display: ${(props) => (!props.isToggled ? "none" : "block")};
  }
`;

const SideNavItemContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const ItemLabel = styled.label`
  margin: 0 0 10px 10px;
  color: ${COLOR.Gray};
  font-weight: ${FONT_WEIGHT.medium};
  font-size: ${FONT_SIZE.small};
`;

const SideNavGuideContainer = styled.div`
  display: flex;
  padding: 25px 15px;
  background-color: ${COLOR.Blue};
  border-radius: 10px;
`;

const GuideTextContainer = styled.div`
  margin-left: 10px;
  align-items: center;
`;

const GuideText = styled.p`
  font-size: ${FONT_SIZE.Large};
  font-weight: ${FONT_WEIGHT.medium};
`;

const GuideSubText = styled.div`
  margin-top: 10px;
  color: ${COLOR.Gray};
  font-size: ${FONT_SIZE.small};
  font-weight: ${FONT_WEIGHT.small};
`;

const SideNavGuideTextContainer = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const GuideExText = styled.p`
  color: ${COLOR.Gray};
  font-weight: ${FONT_WEIGHT.small};
  font-size: ${FONT_SIZE.small};
`;

const GuideButton = styled.button`
  color: ${COLOR.Gray};
  font-weight: ${FONT_WEIGHT.small};
  font-size: ${FONT_SIZE.small};
  margin-top: 10px;
  border-bottom: 1px solid ${COLOR.Gray};
`;

export default SideNav;
