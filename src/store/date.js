import { atom } from "recoil";
import { v1 } from "uuid";

export const startDateAtom = atom({
  key: `codeKey/${v1()}`,
  default: new Date("2022-04-20"),
});

export const endDateAtom = atom({
  key: `codeKey/${v1()}`,
  default: new Date("2022-04-20"),
});
