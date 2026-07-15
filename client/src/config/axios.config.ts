import qs from "qs";
import type { AxiosRequestConfig } from "axios";

export const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3001/api",
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
};
