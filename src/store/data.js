import axios from "axios";
import { selector } from "recoil";

export const trendDataQuery = selector({
  key: "trendDataQuery",
  get: async ({ get }) => {
    const res = await axios.get("http://localhost:4000/trend_data");
    return res.data;
  },
});
