import { AdvertisementService } from "apis/AdvertisementService";
import { AxiosHttpClient } from "apis/request";

const httpClient = new AxiosHttpClient(process.env.REACT_APP_BASE_URL);
const advertisementService = new AdvertisementService(httpClient);

export { advertisementService };
