import { atom } from "recoil";
import { AdvertisementService } from "service/AdvertisementService";
import { AxiosHttpClient } from "api/request";

const httpClient = new AxiosHttpClient(process.env.REACT_APP_JSON_SERVER_BASE_URL);
const advertisementService = new AdvertisementService(httpClient);

export const getAdvertismentState = atom({
  key: "getAdvertismentState",
  default: advertisementService.get.bind(advertisementService),
});
