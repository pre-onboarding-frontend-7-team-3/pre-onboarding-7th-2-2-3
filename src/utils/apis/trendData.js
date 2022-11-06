import axios from "axios";

export const getTrendData = () => {
  return axios
    .get("/trendData")
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};
