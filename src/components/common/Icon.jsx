import React from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

import * as icons from "./icons";

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Icon = ({ icon, size, url }) => {
  const IconComponent = icons[icon];

  const location = useLocation();

  return (
    <Wrapper width={size || 24} height={size || 24}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        width="100%"
        height="100%"
        isActive={url && url === location.pathname}
      />
    </Wrapper>
  );
};

export default Icon;
