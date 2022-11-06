import React from "react";
import styled from "@emotion/styled";

const NavFooter = () => {
  return (
    <Wrapper>
      <span>레버는 함께 만들어갑니다.</span>
      <Terms>이용약관</Terms>
    </Wrapper>
  );
};

export default NavFooter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;

  gap: 10px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #94a2ad;
`;

const Terms = styled.span`
  display: flex;

  text-decoration: underline;
  cursor: pointer;
`;
