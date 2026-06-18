// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { Types } from "mongoose";
import Note from "@models/Note.js";
import { ConflictError, NotFoundError, ValidationError } from "@utils";
import type { NoteModel, NotesQuery, CreateNoteBody } from "@types";

// ——— Helpers —————————————————————————————————————————————————————————————————————————————————————
const isValidMongooseId = (id: string) => Types.ObjectId.isValid(id);

// ——— Services ————————————————————————————————————————————————————————————————————————————————————

export const getAllNotes = async (
  filters: NotesQuery,
): Promise<NoteModel[]> => {
  const query: Record<string, unknown> = {};

  if (filters.isArchived) query.isArchived = filters.isArchived;
  if (filters.tags) query.tags = { $all: filters.tags };

  const notes = await Note.find(query);
  return notes;
};

export const getNoteById = async (id: string): Promise<NoteModel> => {
  if (!isValidMongooseId(id)) throw new ValidationError("Invalid ID");

  const note = await Note.findById(id);
  if (!note) throw new NotFoundError("note");

  return note;
};

export const createNewNote = async (
  note: CreateNoteBody,
): Promise<NoteModel> => {
  const exist = await Note.findOne({ title: note.title });
  if (exist) throw new ConflictError("Note with the same title already exists");

  const newNote = await Note.create(note);
  return newNote;
};
