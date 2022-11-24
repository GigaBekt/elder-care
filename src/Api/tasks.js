import { api } from "./api";

class Tasks {
  getTasks(mode, token) {
    return api.getAxiosInstance().get(`/tasks/${mode}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  myTasks(token) {
    return api.getAxiosInstance().get(`/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  createTask(
    datetime,
    duration_minutes,
    care_service_id,
    location,
    description,
    token
  ) {
    return api.getAxiosInstance().post(
      "/tasks",
      {
        datetime,
        duration_minutes,
        care_service_id,
        location,
        description,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
}

export default Tasks;
