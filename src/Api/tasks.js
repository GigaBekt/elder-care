import { api } from "./api";

class Tasks {
  getTasks(mode, token) {
    return api.getAxiosInstance().get(`/caregiver/tasks/${mode}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  myTasks(token) {
    return api.getAxiosInstance().get(`/caretaker/tasks`, {
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
      "/caretaker/tasks",
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

// {
//   "datetime": "2022-12-04T13:07:21.000Z",
//   "duration_minutes": 90,
//   "care_service_id": "78984428-a8d6-4334-b766-a22d94b76ef3",
//   "location": {
//       "zip": "",
//       "address": "New York, NY, USA",
//       "longitude": "-74.0059728",
//       "latitude": "40.7127753"
//   }
// }
