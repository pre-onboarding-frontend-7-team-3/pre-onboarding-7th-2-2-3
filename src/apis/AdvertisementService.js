export class AdvertisementService {
  #httpClient;

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  get client() {
    return this.#httpClient;
  }

  async get(url = "") {
    const res = await this.client.request({ method: "get", url });

    return res;
  }

  async edit({ id, ...rest }) {
    const { data } = await this.client.request({
      method: "patch",
      url: `/${id}`,
      data: { ...rest },
    });
    return data;
  }
}
