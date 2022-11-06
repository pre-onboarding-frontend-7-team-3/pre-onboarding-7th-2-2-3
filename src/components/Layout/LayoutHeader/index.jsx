import React from "react";
import styled from "@emotion/styled";

import Icon from "components/common/Icon";

const LayoutHeader = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon="Alarm" />
      </IconWrapper>
      <IconWrapper>
        <Icon icon="Setting" />
      </IconWrapper>

      <UserInfoWrapper>
        <Icon icon="DefaultUser" size={40} />
        원티드님
      </UserInfoWrapper>
    </Wrapper>
  );
};

export default LayoutHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  min-height: 80px;

  gap: 24px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  margin-right: 40px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #3a474e;

  cursor: pointer;
`;
