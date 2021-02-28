import { AUTH_KEYS, hydrate } from "utils/storage";
import { axiosInstance } from "./api";
import Axios from "axios";

export const enabledHeadersFromStorage = async () => {
  const token = await hydrate(AUTH_KEYS.token);
  if (!token) {
    return;
  }
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeHeaders = () => {
  axiosInstance.defaults.headers = Axios.defaults.headers;
};
