import axios from "@/shared/lib/axios";
import { requestHandler } from "@/shared/utils/requestHandler";
import type {
  CreateNoteBody,
  NoteModel,
  NotesQuery,
  UpdateNoteBody,
} from "@/shared/types/note.types";

const BASE_URL = "/notes";

export const getNotesReq = (filters?: NotesQuery) => {
  return requestHandler<NoteModel[], NotesQuery>((params) =>
    axios({
      url: BASE_URL,
      method: "GET",
      params,
    }),
  )(filters);
};

export const getNoteReq = (noteId: string) => {
  const api = axios({ url: `${BASE_URL}/${noteId}`, method: "GET" });
  return requestHandler<NoteModel>(() => api)();
};

export const createNoteReq = (note: CreateNoteBody) => {
  const api = axios({ url: BASE_URL, method: "POST", data: note });
  return requestHandler<NoteModel>(() => api)();
};

export const updateNoteReq = (noteId: string, updates: UpdateNoteBody) => {
  const api = axios({
    url: `${BASE_URL}/${noteId}`,
    method: "PUT",
    data: updates,
  });
  return requestHandler<NoteModel>(() => api)();
};

export const toggleIsArchivedReq = (noteId: string) => {
  const api = axios({
    url: `${BASE_URL}/is-archived/${noteId}`,
    method: "PATCH",
  });
  return requestHandler<NoteModel>(() => api)();
};

export const deleteNoteReq = (noteId: string) => {
  const api = axios({ url: `${BASE_URL}/${noteId}`, method: "DELETE" });
  return requestHandler<void>(() => api)();
};
