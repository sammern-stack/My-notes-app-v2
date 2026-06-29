// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import api from "./axios";
import { apiCall } from "@utils";

import type {
  CreateNoteBody,
  UpdateNoteBody,
  NoteModel,
  NotesQuery,
  RequestFn,
} from "@types";

// ——— Notes Requests ——————————————————————————————————————————————————————————————————————————————
export const getNotesRequest = (query: NotesQuery): RequestFn<NoteModel[]> => {
  return apiCall(() => api.get("/notes", { params: query }));
};

export const getNoteRequest = (id: string): RequestFn<NoteModel> => {
  return apiCall(() => api.get(`/notes/${id}`));
};

export const createNoteRequest = (
  note: CreateNoteBody,
): RequestFn<NoteModel> => {
  return apiCall(() => api.post("/notes", note));
};

export const updateNoteRequest = (
  id: string,
  updates: UpdateNoteBody,
): RequestFn<NoteModel> => {
  return apiCall(() => api.put(`/notes/${id}`, updates));
};

export const deleteNoteRequest = (id: string): RequestFn<void> => {
  return apiCall(() => api.delete(`/notes/${id}`));
};
