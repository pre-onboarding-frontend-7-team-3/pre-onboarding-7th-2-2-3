// import { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
import styled from "styled-components";
// import { getAdvertisState } from "./atoms/advertis";

const AdCard = ({ res }) => {
  // console.log("res card", res);
  return (
    <CardContainer>
      <Title>웹광고_</Title>
      <InfoContainer>
        <InfoWrap>
          <span>상태</span>
          <p>{res?.status}</p>
        </InfoWrap>
        <InfoWrap>
          <span>광고 생성일</span>
          <p>{res?.startDate}</p>
        </InfoWrap>
        <InfoWrap>
          <span>일 희망 예산</span>
          <p>{res?.budget}</p>
        </InfoWrap>
        <InfoWrap>
          <span>광고 수익률</span>
          <p>{res?.report?.roas}</p>
        </InfoWrap>
        <InfoWrap>
          <span>매출</span>
          <p>{res}</p>
        </InfoWrap>
        <InfoWrap>
          <span>광고 비용</span>
          <p>3,759만원</p>
        </InfoWrap>
      </InfoContainer>
    </CardContainer>
  );
};

export default AdCard;

const CardContainer = styled.div`
  width: 350px;
  height: 560px;
  background-color: green;
  padding: 10px;
  margin: 30px;
`;

const InfoContainer = styled.div`
  background-color: pink;
  width: 320px;
  margin: 70px auto auto auto;
  border-bottom: 2px solid #94a2ad;
`;

const Title = styled.h3`
  width: 180px;
  height: 19px;
  margin: 20px auto 40px auto; ;
`;

const InfoWrap = styled.div`
  display: inline-flex;
  padding: 5px;
  width: 310px;
  height: 30px;
  border-top: 2px solid #94a2ad;
  span {
    text-align: left;
    color: #94a2ad;
    margin: 8px;
    margin-left: 20px;
  }

  p {
    position: absolute;
    left: 220px;
    padding-bottom: 20px;
  }
`;
