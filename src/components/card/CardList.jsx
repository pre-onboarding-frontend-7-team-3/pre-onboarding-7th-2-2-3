import React, { useEffect } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import { cardsAxios } from "apis/cardsApi";
import { cardsState } from "../../store/atoms/addFilter";
import { useRecoilState } from "recoil";
import { cardTypeState } from "../../store/atoms/addFilter";
import { CARD_STATUS } from "../../constants/CardStatusData";

const CardList = () => {
  const [cardDatas, setCardDatas] = useRecoilState(cardsState);
  const [cardType, setCardType] = useRecoilState(cardTypeState);

  useEffect(() => {
    cardsAxios().then((res) => setCardDatas(res.data.ads));
  }, []);

  const targetValue = cardDatas.filter(({ status }) => {
    return status === cardType;
  });

  const getData = (e) => {
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
      <div style={{ height: "20px" }} />
      <div style={{ width: "1020px", top: "0", left: "0" }}>
        <Grid container spacing={3}>
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
