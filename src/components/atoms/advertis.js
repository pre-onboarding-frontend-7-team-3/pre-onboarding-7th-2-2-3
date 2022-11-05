import { AxiosHttpClient } from "api/request";
import { atom } from "recoil";
import { Adservice } from "../service/Adservice";

const adservices = new Adservice(
  AxiosHttpClient(
    `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/05a1a9db-897f-4e9d-87bd-1e81a03d8e04/wanted_FE_ad-list-data-set.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221105T155917Z&X-Amz-Expires=86400&X-Amz-Signature=d1fefd946d8547e1d61753cd655cade39c896eb98ade5154359c2d995f73f82f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22wanted_FE_ad-list-data-set.json%22&x-id=GetObject`,
  ),
);

export const getAdvertisState = atom({
  key: "getAdvertismentState",
  default: adservices.get.bind(adservices),
});
