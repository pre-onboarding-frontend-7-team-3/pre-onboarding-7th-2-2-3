import { atom } from "recoil";

export const dateState = atom({
  key: "dateState",
  default: {
    startDate: new Date("2022-04-20"),
    endDate: new Date("2022-04-20"),
  },
});
