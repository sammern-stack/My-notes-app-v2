import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export type ApiResponse<T extends object | void> =
  | { ok: true; success: string; data: T; meta?: unknown }
  | { ok: false; error: string };

export type RequestFn<T extends object | void> = Promise<ApiResponse<T>>;

export type AxiosFn<T extends object | void> = () => Promise<{
  data: ApiResponse<T>;
}>;

export type SuccessResponse<T> = {
  ok: true;
  message: string;
  data: T;
  meta?: Record<string, unknown>;
};

export type ErrorResponse = {
  ok: false;
  message: string;
};

export type BaseRequestResponse<T> = Promise<AxiosResponse<SuccessResponse<T>>>;
export type BaseRequest<T, K> = (params?: K) => BaseRequestResponse<T>;
export type AxiosConfig = InternalAxiosRequestConfig & { _retry?: boolean };
