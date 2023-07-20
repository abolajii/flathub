import axios from "axios";
const getSubscribeToken = () => localStorage.getItem("subscribe");

export const setSubscribeToken = async (token) =>
  localStorage.setItem("subscribe", token);

export const removeSubscribeToken = async () =>
  localStorage.removeItem("subscribe");

const FlatHubSub = axios.create();

FlatHubSub.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.REACT_APP_API_URL;
    config.headers.Authorization =
      getSubscribeToken() && `Bearer ${getSubscribeToken()}`;

    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { FlatHubSub };
