import axios from "axios";

const axiosApi = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://192.168.1.31:3000",
});

axiosApi.defaults.headers.common["Authorization"] = "";

axiosApi.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

const makeRequest = (method, url, config = {}) => {
  let requestConfig = {
    ...config,
    method,
    url,
  };
  return axiosApi(requestConfig);
};

export const get = (url, config = {}) => makeRequest("get", url, config);
export const post = (url, config = {}) => makeRequest("post", url, config);
export const patch = (url, config = {}) => makeRequest("patch", url, config);
export const del = (url, config = {}) => makeRequest("delete", url, config);
