import { atom } from "recoil";

export const startDateAtom = atom({
  key: "startDate",
  default: new Date("2022-04-20"),
});

export const endDateAtom = atom({
  key: "endDate",
  default: new Date("2022-04-20"),
});
