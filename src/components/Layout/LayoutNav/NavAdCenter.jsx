import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { AD_CENTER_TYPE } from "constants/AdCenterType";

import Icon from "components/common/Icon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 220px;
  height: auto;

  margin-bottom: 200px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 0 10px 5px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #94a2ad;
`;

const ItemWrapper = styled(NavLink)`
  display: flex;

  align-items: center;

  height: 60px;

  padding: 0 10px;

  gap: 12px;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #3a474e;
  text-decoration: none;

  &.active {
    position: relative;

    color: #586cf5;
    background: #edeff1;
    border-radius: 10px;
  }

  &:hover {
    background-color: #edeff1;
    border-radius: 10px;
  }

  span {
    margin-top: 3px;
  }

  cursor: pointer;
`;

const NavAdCenter = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleWrapper>광고 센터</TitleWrapper>

      {AD_CENTER_TYPE.map((type, index) => {
        return (
          <ItemWrapper
            key={index}
            onClick={() => {
              navigate(type.url);
            }}
            to={type.url}
          >
            <Icon icon={type.eng_name} url={type.url} />
            <span>{type.name}</span>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default NavAdCenter;
