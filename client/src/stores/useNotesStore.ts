// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";
import type { CreateNoteBody, NoteModel } from "@types";
import {
  createNoteRequest,
  getNoteRequest,
  getNotesRequest,
} from "@/api/notesApi";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface NotesStore {
  notes: NoteModel[];
  setNotes: () => Promise<void>;

  selectedNoteId: string | null;
  setSelectedNoteId: (id: string) => void;

  // Api Requests
  fetchNotes: () => Promise<NoteModel[]>;
  fetchNote: (id: string) => Promise<NoteModel>;
  createNewNote: (note: CreateNoteBody) => Promise<void>;
}

// ——— Utility —————————————————————————————————————————————————————————————————————————————————————
const throwError = (reason: string, error: string) => {
  throw new Error(`Error occurred while ${reason}: ${error}`);
};

// ——— Notes Store —————————————————————————————————————————————————————————————————————————————————
export const useNotesStore = create<NotesStore>((set, get) => ({
  notes: [],
  setNotes: async () => {
    const notes = await get().fetchNotes();
    console.log(JSON.stringify(notes, null, 2));
    set({ notes })
  },

  selectedNoteId: null,
  setSelectedNoteId: (id) => set({ selectedNoteId: id }),

  // Api Requests
  fetchNotes: async () => {
    const res = await getNotesRequest({});
    if (!res.ok) return throwError("fetching notes", res.error);
    return res.data;
  },

  fetchNote: async (id) => {
    const res = await getNoteRequest(id);
    if (!res.ok) return throwError("fetching note", res.error);
    return res.data;
  },

  createNewNote: async (note: CreateNoteBody) => {
    const res = await createNoteRequest(note);
    if (!res.ok) return throwError("creating note", res.error);
    await get().setNotes();
  },
}));
