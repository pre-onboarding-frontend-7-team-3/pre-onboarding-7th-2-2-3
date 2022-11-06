import { selector } from "recoil";
import { v1 } from "uuid";
import { getAdvertismentState } from "./advertisment";

export const getEveryDayAdResults = selector({
  key: `codeKey/${v1()}`,
  get: async ({ get }) => {
    const totalAds = await get(getAdvertismentState)("/trend_data");

    return { totalAds, count: totalAds.length };
  },
});
