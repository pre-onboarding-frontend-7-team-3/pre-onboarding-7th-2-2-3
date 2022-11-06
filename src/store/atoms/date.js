import { atom } from "recoil";

export const startDateAtom = atom({
  key: "startDate",
  default: new Date("2022-02-01"),
});

export const endDateAtom = atom({
  key: "endDate",
  default: new Date("2022-02-07"),
});
