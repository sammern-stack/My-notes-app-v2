export type ApiResponse<T extends object | void> =
  | { ok: true; success: string; data: T; meta?: unknown }
  | { ok: false; error: string };

export type RequestFn<T extends object | void> = Promise<ApiResponse<T>>;

export type AxiosFn<T extends object | void> = () => Promise<{
  data: ApiResponse<T>;
}>;
