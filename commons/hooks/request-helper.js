import axios from "axios";
import qs from "qs";

const request = axios.create({
  baseURL: 'http://localhost:8000',
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { request };
