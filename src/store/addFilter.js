import { atom } from "recoil";

import { CARD_STATUS } from "constants/AdManagementSelectData";

export const cardTypeState = atom({
  key: "cardTypeState",
  default: CARD_STATUS.ALL,
});
