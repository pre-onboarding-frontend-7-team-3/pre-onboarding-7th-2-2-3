import axios from "axios";
import { atom, selector } from "recoil";

export const dateState = atom({
  key: "dateState",
  default: {
    startDate: new Date("2022-04-20"),
    endDate: new Date("2022-04-20"),
  },
});

export const trendDataQuery = selector({
  key: "trendDataQuery",
  get: async ({ get }) => {
    // const date = get(dateState);
    const res = await axios.get("http://localhost:4000/trend_data");
    return res.data;
  },
});
