import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import _ from "lodash";

import { useOnClickOutside } from "hooks/useOnClickOutside";

import LayoutNav from "./LayoutNav";
import LayoutHeader from "./LayoutHeader";

import Icon from "components/common/Icon";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const path = useLocation();

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

  useEffect(() => {
    const delayRender = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      setIsLoading(true);
      clearTimeout(delayRender);
    };
  }, [path, setIsLoading]);

  return (
    <Wrapper>
      <HambargerBar
        isToggled={isToggled}
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <Icon icon="SideNavToggle" size={30} />
      </HambargerBar>
      <SideNavContainer ref={navRef} isToggled={isToggled}>
        <LayoutNav />
      </SideNavContainer>
      <ContentWrapper>
        <LayoutHeader />
        {isLoading ? <LoadingWrapper>loading</LoadingWrapper> : <>{children}</>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const HambargerBar = styled.div`
  width: 30px;
  position: absolute;
  top: 32px;
  left: 32px;
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

  @media (max-width: 768px) {
    display: ${(props) => (!props.isToggled ? "none" : "block")};
  }
`;

const LoadingWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 40px 80px 0;
`;
