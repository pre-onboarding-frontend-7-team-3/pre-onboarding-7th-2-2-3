/* eslint-disable no-console */
import axios from "axios";
import { selector } from "recoil";

import { advertisementService } from "apis";

export const trendDataQuery = selector({
  key: "trendDataQuery",
  get: async ({ get }) => {
    try {
      const res = await advertisementService.get(`${process.env.REACT_APP_BASE_URL}/trend_data`);
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
});
