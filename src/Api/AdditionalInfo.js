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
    return api.getAxiosInstance().get("/certifications");
  }
}

export default AdditionalInfo;
