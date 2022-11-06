import { atom } from "recoil";
import { v1 } from "uuid";
import { AdvertisementService } from "service/AdvertisementService";
import { AxiosHttpClient } from "api/request";

const httpClient = new AxiosHttpClient(process.env.REACT_APP_JSON_SERVER_BASE_URL);
const advertisementService = new AdvertisementService(httpClient);

export const getAdvertismentState = atom({
  key: `codeKey/${v1()}`,
  default: advertisementService.get.bind(advertisementService),
});
