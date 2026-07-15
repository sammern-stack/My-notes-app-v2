// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { Types } from "mongoose";
import Note from "./Note.js";

import {
  ConflictError,
  NotFoundError,
  ValidationError,
} from "../../shared/utils/customErrors.js";

import { queryOptions } from "@/config/db.js";
import type {
  NoteModel,
  NotesQuery,
  CreateNoteBody,
  UpdateNoteBody,
} from "./notes.types.js";

// ——— Helpers —————————————————————————————————————————————————————————————————————————————————————
const validateMongooseId = (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new ValidationError("Invalid Id");
};

const validateNote = async (id: string) => {
  validateMongooseId(id);
  const note = await Note.findById(id);
  if (!note) throw new NotFoundError(`note with id ${id}`);
  return note;
};

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
  return await validateNote(id);
};

export const createNewNote = async (
  note: CreateNoteBody,
): Promise<NoteModel> => {
  const exist = await Note.findOne({ title: note.title });
  if (exist) throw new ConflictError("Note with the same title already exists");

  const newNote = await Note.create(note);
  return newNote;
};

export const updateNote = async (
  id: string,
  updates: UpdateNoteBody,
): Promise<NoteModel> => {
  const { _id } = await validateNote(id);

  const updatedNote = await Note.findByIdAndUpdate(_id, updates, queryOptions);
  if (!updatedNote) throw new NotFoundError("note");

  return updatedNote;
};

export const toggleIsArchived = async (id: string): Promise<NoteModel> => {
  const { _id, isArchived } = await validateNote(id);

  const updatedNote = await Note.findByIdAndUpdate(
    _id,
    { isArchived: !isArchived },
    queryOptions,
  );
  if (!updatedNote) throw new NotFoundError("note");

  return updatedNote;
};

export const deleteNote = async (id: string): Promise<void> => {
  const { _id } = await validateNote(id);
  await Note.findByIdAndDelete(_id);
};
