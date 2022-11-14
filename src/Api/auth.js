import { api } from "./api";

class Auth {
  sendCode(phone_number) {
    return api.getAxiosInstance().post("/auth/otp", { phone_number });
  }
  verify(phone_number, code) {
    return api
      .getAxiosInstance()
      .post("/auth/otp/verify", { phone_number, code });
  }
}
export default Auth;
