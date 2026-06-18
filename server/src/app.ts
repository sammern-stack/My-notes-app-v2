// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import express from "express";
import cors from "cors";
import { corsOptions } from "@config";
import { errorHandler } from "@middleware";
import noteRoutes from "@routes/notes.route.js"

// ——— Express App —————————————————————————————————————————————————————————————————————————————————
const app = express();

// ——— Middleware ——————————————————————————————————————————————————————————————————————————————————
app.use(express.json());
app.use(cors(corsOptions));

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
app.use("/api/notes", noteRoutes);

// ——— Error Handling ——————————————————————————————————————————————————————————————————————————————
app.use(errorHandler);

export default app;
