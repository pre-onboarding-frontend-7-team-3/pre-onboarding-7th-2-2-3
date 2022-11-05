import { atom } from "recoil";

export const startDate = atom({
  key: "startDate",
  default: new Date("2022-02-01"),
});

export const endDate = atom({
  key: "endDate",
  default: new Date("2022-02-07"),
});
