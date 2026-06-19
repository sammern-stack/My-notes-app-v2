export type ApiResponse<T extends object, K extends object = object> =
  | { ok: true; success: string; data: T; meta?: K }
  | { ok: false; error: string };

export type RequestFn<T extends object, K extends object = object> = Promise<
  ApiResponse<T, K>
>;

export type AxiosFn<
  T extends object,
  K extends object = object,
> = () => Promise<{ data: ApiResponse<T, K> }>;
