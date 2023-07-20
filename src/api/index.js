import axios from "axios";
import { destroyToken, getToken } from "./helper";

const FlatHub = axios.create();

FlatHub.interceptors.request.use(
  (config) => {
    // console.log(JSON.parse(localStorage.getItem('userInfo')).data.accessToken);
    config.baseURL = process.env.REACT_APP_API_URL;
    config.headers.Authorization = getToken() && `Bearer ${getToken()}`;
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

FlatHub.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      destroyToken();
      const role = window.location.href.split("/")[3];
      if (role == "company" || role == "user") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
export { FlatHub };
