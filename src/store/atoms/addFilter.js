import { atom } from "recoil";
import { CARD_STATUS } from "../../constants/CardStatusData";

export const cardsState = atom({
  key: "cardState",
  default: [],
});

export const cardTypeState = atom({
  key: "cardTypeState",
  default: CARD_STATUS.ALL,
});
