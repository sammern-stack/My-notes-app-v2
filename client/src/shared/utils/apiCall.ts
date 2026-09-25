// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { AxiosFn, RequestFn } from "@/shared/types/api.types";

// ——— Utility —————————————————————————————————————————————————————————————————————————————————————
export const apiCall = async <T extends object, K extends object = object>(
  fn: AxiosFn<T, K>,
): RequestFn<T, K> => {
  try {
    const { data } = await fn();
    return { ...data };
  } catch (err) {
    console.log("Error:", err);
    return {
      ok: false,
      error: `An unexpected error occurred: ${err}`,
    };
  }
};
