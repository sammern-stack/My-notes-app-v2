// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import express from "express";
import cors from "cors";
import { corsOptions } from "@config";
import { errorHandler } from "@middleware";

// ——— Express App —————————————————————————————————————————————————————————————————————————————————
const app = express();

// ——— Middleware ——————————————————————————————————————————————————————————————————————————————————
app.use(express.json());
app.use(cors(corsOptions));

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————

// ——— Error Handling ——————————————————————————————————————————————————————————————————————————————
app.use(errorHandler);

export default app;
