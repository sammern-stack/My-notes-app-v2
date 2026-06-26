// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { Request, Response } from "express";
import * as noteService from "@services/notes.service.js";
import { asyncHandler, NotFoundError, sendSuccess } from "@utils";
import type {
  NotesQuery,
  NotesParams,
  CreateNoteBody,
  UpdateNoteBody,
} from "@types";

// ——— Controllers —————————————————————————————————————————————————————————————————————————————————
export const getNotes = asyncHandler(
  async (req: Request<{}, {}, {}, NotesQuery>, res: Response) => {
    const notes = await noteService.getAllNotes(req.query);
    sendSuccess(res, 200, "Notes received successfully", notes, {
      length: notes.length,
      archived: notes.filter((n) => n.isArchived).length,
    });
  },
);

export const getNote = asyncHandler(
  async (req: Request<NotesParams>, res: Response) => {
    const note = await noteService.getNoteById(req.params.id!);
    sendSuccess(res, 200, "Note received successfully", note);
  },
);

export const createNote = asyncHandler(
  async (req: Request<{}, {}, CreateNoteBody>, res: Response) => {
    const newNote = await noteService.createNewNote(req.body);
    sendSuccess(res, 200, "Note created successfully", newNote);
  },
);

export const updateNote = asyncHandler(
  async (req: Request<NotesParams, {}, UpdateNoteBody>, res: Response) => {
    const updatedNote = await noteService.updateNote(req.params.id!, req.body);
    sendSuccess(res, 200, "Note updated successfully", updatedNote);
  },
);

export const deleteNote = asyncHandler(
  async (req: Request<NotesParams>, res: Response) => {
    await noteService.deleteNote(req.params.id!);
    sendSuccess(res, 200, "Note deleted successfully", {});
  },
);
