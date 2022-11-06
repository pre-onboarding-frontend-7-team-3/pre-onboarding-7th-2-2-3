import React from "react";
import styled from "@emotion/styled";

import Icon from "components/common/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 240px;
  height: 100px;

  gap: 8px;
  margin-bottom: 40px;
  padding-left: 20px;

  background: #e5f4fd;
  border-radius: 10px;

  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #94a2ad;
`;

const MainText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #3a474e;
`;

const NavGuide = () => {
  return (
    <Wrapper>
      <Icon icon="Guide" size="40" />
      <TextWrapper>
        <MainText>레버 이용 가이드</MainText>
        <span>시작하기 전에 알아보기</span>
      </TextWrapper>
    </Wrapper>
  );
};

export default NavGuide;
