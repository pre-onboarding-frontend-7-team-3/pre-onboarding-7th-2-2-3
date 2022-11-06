import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;

  margin-bottom: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 5px;
  margin: 0 0 10px 10px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #94a2ad;
`;

const Service = styled.div`
  > select {
    padding: 20px 10px;
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 53px;
  }
`;

const TestOption = styled.option`
  background-color: red;
`;

const NavService = () => {
  return (
    <Wrapper>
      <Service>
        <TitleWrapper>서비스</TitleWrapper>
        <select>
          <option>매드업</option>
          <option>서비스 추가</option>
        </select>
      </Service>
    </Wrapper>
  );
};

export default NavService;
