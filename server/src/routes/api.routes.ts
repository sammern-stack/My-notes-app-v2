import { Router } from "express";
import noteRoutes from "../features/notes/notes.route.js";

const router = Router();

router.use("/notes", noteRoutes);

export default router;
