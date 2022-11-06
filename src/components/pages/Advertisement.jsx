import AdCard from "components/AdCard";
import { getAdvertisState } from "components/atoms/advertis";
import Header from "components/common/Header";
import React from "react";
import { useEffect, useState } from "react";
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
  const [getCardType, setGetCardType] = useState(cardType.ALL);

  useEffect(() => {
    const getData = async () => {
      const res = await getAd();
      setCardData(res);
    };
    getData();
  }, []);

  const getTypeDataHandler = async (event) => {
    setGetCardType(event.target.ClassName);
  };

  const selectValue = cardData?.ads?.filter(({ status }) => {
    return status === cardType;
  });

  return (
    <>
      <Container>
        <Header />
        <Wrap>
          <div className={cardType.ALL} onClick={getTypeDataHandler}>
            전체
          </div>
          <div className={cardType.ENDED} onClick={getTypeDataHandler}>
            중단됨
          </div>
          <div className={cardType.ACTIVE} onClick={getTypeDataHandler}>
            진행중
          </div>
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
