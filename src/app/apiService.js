import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

// Check how requests work
apiService.interceptors.request.use(
  (request) => {
    console.log("Start requesting", request);
    return request;
  },
  function (error) {
    console.log("Request error", error);
  }
);

// Check how responses work
apiService.interceptors.response.use(
  (response) => {
    console.log("Receiving response", response);
    return response;
  },
  function (error) {
    console.log("Response error", error);
  }
);

export default apiService;
