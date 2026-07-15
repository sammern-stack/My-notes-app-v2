import express from "express";
import cors from "cors";
import { corsOptions } from "@/config/corsOptions.js";
import { errorHandler } from "./shared/middleware/errorHandler.js";
import apiRoutes from "./routes/api.routes.js";

const app = express();

// ——— Middleware ——————————————————————————————————————————————————————————————————————————————————
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
app.use("/api", apiRoutes);

// ——— Error Handling ——————————————————————————————————————————————————————————————————————————————
app.use(errorHandler);

export default app;
