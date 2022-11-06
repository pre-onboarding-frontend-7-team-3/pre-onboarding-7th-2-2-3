import styled from "@emotion/styled";
import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import unitDecider from "utils/unitDecider";

export const ROAS = ({ value, exValue }) => {
  const diff = value - exValue;
  return (
    <InfoBoxWrapper>
    <TitleBox>
      <h3>ROAS</h3>
      <p>{parseInt(value)}%</p>
      </TitleBox>
      <RightBox>
        {diff > 0 ? <AiOutlineCaretUp color="green" /> : <AiOutlineCaretDown color="red" />}
        {parseInt(Math.abs(diff))}%
        </RightBox>
    </InfoBoxWrapper>
  );
};
export const Cost = ({ value, exValue }) => {
  const diff = value - exValue;
  return (
    <InfoBoxWrapper>
      <TitleBox>
      <h3>광고비</h3>
      <p>{unitDecider(parseInt(value))} 원</p>
      </TitleBox>
      <RightBox>
        {diff > 0 ? <AiOutlineCaretUp color="green" /> : <AiOutlineCaretDown color="red" />}
        {unitDecider(Math.abs(parseInt(diff)))} 원
        </RightBox>
    </InfoBoxWrapper>
  );
};

export const Imp = ({ value, exValue }) => {
  const diff = value - exValue;
  return (
    <InfoBoxWrapper>
    <TitleBox>
      <h3>노출수</h3>
      <p>{unitDecider(parseInt(value))} 회</p>
      </TitleBox>
      <RightBox>
        {diff > 0 ? <AiOutlineCaretUp color="green" /> : <AiOutlineCaretDown color="red" />}
        {unitDecider(Math.abs(parseInt(diff)))} 회
        </RightBox>
    </InfoBoxWrapper>
  );
};

export const Click = ({ value, exValue }) => {
  const diff = value - exValue;
  return (
    <InfoBoxWrapper>
      <TitleBox>
      <h3>클릭수</h3>
      <p>{unitDecider(value)} 회</p>
      </TitleBox>
      <RightBox>
        {diff > 0 ? <AiOutlineCaretUp color="green" /> : <AiOutlineCaretDown color="red" />}
        {unitDecider(Math.abs(diff))} 회
        </RightBox>
    </InfoBoxWrapper>
  );
};
export const Conv = ({ value, exValue }) => {
  const diff = value - exValue;
  return (
    <InfoBoxWrapper>
      <TitleBox>
        <h3>전환수</h3>
        <p>{parseInt(value)} 회</p>
      </TitleBox>
      <RightBox>
        {diff > 0 ? <AiOutlineCaretUp color="green" /> : <AiOutlineCaretDown color="red" />}
        {Math.abs(diff)} 회
      </RightBox>
    </InfoBoxWrapper>
  );
};
export const Revenue = ({ value, exValue }) => {
  const diff = value - exValue;
  console.log(value, exValue, diff);
  return (
    <InfoBoxWrapper>
      <TitleBox>
        <h3>매출</h3>
        <p>{unitDecider(parseInt(value))} 원</p>
      </TitleBox>
      <RightBox>
        {diff > 0 ? <AiOutlineCaretUp color="green" /> : <AiOutlineCaretDown color="red" />}
        {unitDecider(Math.abs(diff))} 원
      </RightBox>
    </InfoBoxWrapper>
  );
};

const InfoBoxWrapper = styled.div`
  border: 0.5px solid #EDEFF1;
  border-radius: 10px;;
  margin: 10px;
  padding: 18px 40px;
  position: relative;
  div {
    float: left;
  }
  z-index:-1;
`;
const TitleBox = styled.div`
  h3 {
    color: #94a2ad;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #3a474e;
  }
`;
const RightBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 40px 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #3a474e;
`;
