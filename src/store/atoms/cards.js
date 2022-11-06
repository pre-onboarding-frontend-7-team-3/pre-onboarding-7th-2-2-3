import { atom, selector } from "recoil";
import axios from "axios";

export const adListFilterState = atom({
  key: "adListFilter",
  default: "전체 광고",
});

export const adListState = selector({
  key: "adListState",
  get: async ({ get }) => {
    const { data } = await axios.get("/http://localhost:4000/ads");
    return data.ads;
  },
});

export const adListFilterQuery = selector({
  key: "adListFilterQuery",
  get: ({ get }) => {
    const filter = get(adListFilterState);
    const adList = get(adListState);

    switch (filter) {
      case "전체 광고": {
        return adList;
      }
      case "진행중인 광고": {
        return adList.filter((ad) => ad.status === "active");
      }
      case "종료된 광고": {
        return adList.filter((ad) => ad.status === "ended");
      }
      default:
        throw new Error("Error finding adList");
    }
  },
});
