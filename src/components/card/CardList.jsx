import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import { cardsAxios } from "apis/cardsApi";
import { cardsState } from "store/atoms/recoil";
import { useRecoilState } from "recoil";
import { CARD_STATUS } from "constants/CARD_STATUS";

const CardList = () => {
  const [cardDatas, setCardDatas] = useRecoilState(cardsState);
  const [cardType, setCardType] = useState(CARD_STATUS.ALL);

  useEffect(() => {
    cardsAxios().then((res) => setCardDatas(res.data.ads));
  }, []);

  const targetValue = cardDatas.filter(({ status }) => {
    return status === cardType;
  });

  const getData = async (e) => {
    setCardType(e.target.className);
  };

  return (
    <>
      <div className={CARD_STATUS.ALL} onClick={getData}>
        전체
      </div>
      <div className={CARD_STATUS.ENDED} onClick={getData}>
        중단됨
      </div>
      <div className={CARD_STATUS.ACTIVE} onClick={getData}>
        진행중
      </div>
      <div style={{ height: "40px" }} />
      <div style={{ width: "1020px", top: "0", left: "0" }}>
        <Grid container spacing={3} gap="px">
          {cardType === CARD_STATUS.ALL
            ? cardDatas.map((cardData) => {
                return <Card key={cardData.id} cardData={cardData} />;
              })
            : targetValue.map((cardData) => {
                return <Card key={cardData.id} cardData={cardData} />;
              })}
        </Grid>
      </div>
    </>
  );
};

export default CardList;
