// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import express from "express";
import cors from "cors";
import { corsOptions } from "@config";

// ——— Express App —————————————————————————————————————————————————————————————————————————————————
const app = express();

// ——— Middleware ——————————————————————————————————————————————————————————————————————————————————
app.use(express.json());
app.use(cors(corsOptions));

export default app;
