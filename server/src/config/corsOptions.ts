import type { CorsOptions } from "cors";
import { CLIENT_URL } from "./env.js";

export const corsOptions: CorsOptions = {
  origin: CLIENT_URL,
  credentials: true,
}
