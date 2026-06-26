// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { Router } from "express";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
} from "@controllers/notes.controller.js";

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
const router = Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNote).put(updateNote);

export default router;
