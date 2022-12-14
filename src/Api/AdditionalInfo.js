import { api } from "./api";
class AdditionalInfo {
  getServices() {
    return api.getAxiosInstance().get("/services");
  }
  workingExperiance() {
    return api.getAxiosInstance().get("/working-experiences");
  }
  careExperiance() {
    return api.getAxiosInstance().get("/care-experiences");
  }
  certifications() {
    return api.getAxiosInstance().get("/care-certifications");
  }
  hobbies() {
    return api.getAxiosInstance().get("/hobbies");
  }
  getTypes() {
    return api.getAxiosInstance().get("/user-types");
  }
}

export default AdditionalInfo;
