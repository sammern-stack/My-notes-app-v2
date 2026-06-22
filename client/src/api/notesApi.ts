// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import api from "./axios";
import { apiCall } from "@utils";

import type { CreateNoteBody, NoteModel, NotesQuery, RequestFn } from "@types";

// ——— Notes Requests ——————————————————————————————————————————————————————————————————————————————
export const getNotesRequest = (query: NotesQuery): RequestFn<NoteModel[]> => {
  return apiCall(() => api.get("/notes", { params: query }));
};

export const getNoteRequest = (id: string): RequestFn<NoteModel> => {
  return apiCall(() => api.get(`/notes/${id}`));
};

export const createNoteRequest = (note: CreateNoteBody): RequestFn<NoteModel> => {
  return apiCall(() => api.post("/notes", note));
};
