// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { Router } from "express";
import * as notesController from "./notes.controller.js";

// ——— Routes ——————————————————————————————————————————————————————————————————————————————————————
const router = Router();

router
  .route("/")
  .get(notesController.getNotes)
  .post(notesController.createNote);

  router
  .route("/:id")
  .get(notesController.getNote)
  .put(notesController.updateNote)
  .delete(notesController.deleteNote);

router.patch("/is-archived/:id", notesController.toggleIsArchived);

export default router;
