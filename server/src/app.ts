// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import express from "express";
import cors from "cors";
import { corsOptions } from "@config";
import { errorHandler } from "@middleware";
import apiRoutes from "./routes/api.routes.js";

// ——— Express App —————————————————————————————————————————————————————————————————————————————————
const app = express();

// ——— Middleware ——————————————————————————————————————————————————————————————————————————————————
app.use(express.json());
app.use(cors(corsOptions));

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
app.use("/api", apiRoutes);

// ——— Error Handling ——————————————————————————————————————————————————————————————————————————————
app.use(errorHandler);

export default app;
