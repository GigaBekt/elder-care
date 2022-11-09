import axios from "axios";

class API {
  constructor() {
    (this.apiURL = "https://care-api.betanet.dev"),
      (this.axiosInstance = axios.create({
        baseURL: this.apiURL,
      }));
  }

  getAxiosInstance() {
    return this.axiosInstance;
  }
}

export const api = new API();
