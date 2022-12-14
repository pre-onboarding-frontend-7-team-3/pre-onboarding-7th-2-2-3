/* eslint-disable no-console */
import { atom, selector } from "recoil";

import { advertisementService } from "apis";

export const adListFilterState = atom({
  key: "adListFilter",
  default: "전체",
});

export const adListState = selector({
  key: "adListState",
  get: async ({ get }) => {
    try {
      const { data } = await advertisementService.get(
        `${process.env.REACT_APP_BASE_URL}/ad_list_data`,
      );
      return data.ads;
    } catch (error) {
      console.log("error", error);
    }
  },
});

export const adListFilterQuery = selector({
  key: "adListFilterQuery",
  get: ({ get }) => {
    const filter = get(adListFilterState);
    const adList = get(adListState);

    switch (filter) {
      case "전체": {
        return adList;
      }
      case "진행중": {
        return adList.filter((ad) => ad.status === "active");
      }
      case "중단됨": {
        return adList.filter((ad) => ad.status === "ended");
      }
      default:
        throw new Error("Error finding adList");
    }
  },
});
