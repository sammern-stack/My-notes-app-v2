// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { Router } from "express";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "@controllers/notes.controller.js";

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
const router = Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

export default router;
