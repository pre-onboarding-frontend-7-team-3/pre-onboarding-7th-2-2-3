import axios from "axios";

export const cardsAxios = () => {
  const res = axios.get("/mock/adListData.json");

  return res;
};
