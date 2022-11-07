import axios from "axios";

export class AxiosHttpClient {
  #baseURL;
  #client;

  constructor(baseURL) {
    this.#baseURL = baseURL;
    this.#client = axios.create({ baseURL: this.#baseURL });
  }

  async request({ ...options }) {
    const onSuccess = (response) => response;
    const onError = (error) => error;

    return this.#client(options).then(onSuccess).catch(onError);
  }
}
