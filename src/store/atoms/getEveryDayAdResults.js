import { selector } from "recoil";
import { getAdvertismentState } from "./advertisment";

export const getEveryDayAdResults = selector({
  key: "getTotalAdCountState",
  get: async ({ get }) => {
    const totalAds = await get(getAdvertismentState)("/trend_data");

    return { totalAds, count: totalAds.length };
  },
});
