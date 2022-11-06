import axios from "axios";
import { selector } from "recoil";

export const trendDataQuery = selector({
  key: "trendDataQuery",
  get: async ({ get }) => {
    // const date = get(dateState);
    const res = await axios.get("https://madup-wanted-3.herokuapp.com/trend_data");
    return res.data;
  },
});
