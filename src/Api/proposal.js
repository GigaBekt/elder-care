import { api } from "./api";

class Proposal {
  sendProposal(price, cover_letter, id, token) {
    return api.getAxiosInstance().post(
      `/caregiver/tasks/${id}/proposals`,
      { price, cover_letter },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
  gerProposal(id, token) {
    return api.getAxiosInstance().get(`/tasks/${id}/proposals`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default Proposal;
// 18332631063
