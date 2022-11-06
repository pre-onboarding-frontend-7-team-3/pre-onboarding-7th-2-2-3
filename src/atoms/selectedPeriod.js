import { atom } from "recoil";

export const selectedPeriod = atom({
  key: "selectedPeriod",
  default: {
    startDate: null,
    endDate: null,
  },
});

export const boundaryDate = atom({
  key: "boundaryDate",
  default: {
    minDate: null,
    maxDate: null,
  },
});
