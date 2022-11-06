import AdCard from "components/AdCard";
import { getAdStatus, getAdvertisState } from "components/atoms/advertis";
import Header from "components/common/Header";
import React from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const Advertisement = () => {
  const getAd = useRecoilValue(getAdvertisState);
  const [cardData, setCardData] = useRecoilState(getAdvertisState) || {};

  const cardType = {
    ALL: "all",
    ENDED: "ended",
    ACTIVE: "active",
  };
  const [getCardType, setGetCardType] = useRecoilState(getAdStatus);

  useEffect(() => {
    const getData = async () => {
      const res = await getAd();
      setCardData(res);
    };
    getData();
  }, []);

  const getTypeDataHandler = async (event) => {
    setGetCardType(event.target.value);
  };

  const selectValue = cardData?.ads?.filter(({ status }) => {
    return status === getCardType;
  });

  return (
    <>
      <Container>
        <Header />
        <Wrap>
          <SelectBox onChange={getTypeDataHandler}>
            <option value="all">전체</option>
            <option value="ended">중단됨</option>
            <option value="active">진행중</option>
          </SelectBox>
          <div style={{ display: "flex", overflowY: "scoll" }}>
            {cardType.ALL === getCardType
              ? cardData?.ads?.map((res) => {
                  return <AdCard key={res.id} res={res} />;
                })
              : selectValue?.map((res) => {
                  return <AdCard key={res.id} res={res} />;
                })}
          </div>
        </Wrap>
      </Container>
    </>
  );
};

export default Advertisement;

const Container = styled.div`
  display: flex;
`;

const Wrap = styled.div``;

const SelectBox = styled.select`
  margin-top: 50px;
  width: 125px;
  height: 45px;
  border-radius: 10px;
`;
