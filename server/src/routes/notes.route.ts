// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { Router } from "express";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  toggleIsArchived,
  deleteNote,
} from "@controllers/notes.controller.js";

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
const router = Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

router.patch("/is-archived/:id", toggleIsArchived);

export default router;
