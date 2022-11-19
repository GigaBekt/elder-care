import axios from "axios";
import { api } from "./api";

class Auth {
  constructor() {
    (this.apiURL = "https://care-api.betanet.dev"),
      (this.axiosInstance = axios.create({
        withCredentials: true,
        baseURL: this.apiURL,
      }));
  }

  sendCode(phone_number) {
    return api.getAxiosInstance().post("/auth/otp", { phone_number });
  }
  verify(phone_number, code) {
    return api
      .getAxiosInstance()
      .post("/auth/otp/verify", { phone_number, code });
  }

  regisCareTaker(formData) {
    return this.axiosInstance({
      method: "post",
      url: "/auth/user/caretaker",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default Auth;
