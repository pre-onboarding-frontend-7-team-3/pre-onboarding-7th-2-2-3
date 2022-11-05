export class Adservice {
  #httpClient;

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  get client() {
    return this.#httpClient;
  }

  async get(url = "") {
    const { data } = await this.client.request({ method: "get", url });
    return data;
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
