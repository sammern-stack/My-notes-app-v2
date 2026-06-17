import type { CorsOptions } from "cors";
import { config } from "./env.js";

export const corsOptions: CorsOptions = {
  origin: config.clientUrl,
  credentials: true,
}
