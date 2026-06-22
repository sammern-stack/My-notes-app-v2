// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";
import type { CreateNoteBody, NoteModel, NotesQuery } from "@types";
import {
  createNoteRequest,
  getNoteRequest,
  getNotesRequest,
} from "@/api/notesApi";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface NotesStore {
  notes: NoteModel[];
  setNotes: (query: NotesQuery) => Promise<void>;

  tags: Set<string>;
  setTags: () => Promise<void>;

  // Api Requests
  fetchNotes: (query: NotesQuery) => Promise<NoteModel[]>;
  fetchNote: (id: string) => Promise<NoteModel>;
  createNewNote: (note: CreateNoteBody) => Promise<NoteModel>;

  // Helpers
  syncNotes: () => Promise<void>;
}

// ——— Utility —————————————————————————————————————————————————————————————————————————————————————
const throwError = (reason: string, error: string) => {
  throw new Error(`Error occurred while ${reason}: ${error}`);
};

// ——— Notes Store —————————————————————————————————————————————————————————————————————————————————
export const useNotesStore = create<NotesStore>((set, get) => ({
  notes: [],
  setNotes: async (query) => {
    const notes = await get().fetchNotes(query);

    const sortedNotes = [...notes].sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt),
    );

    set({ notes: sortedNotes });
  },

  tags: new Set(),
  setTags: async () => {
    const notes = await get().fetchNotes({});
    const tags = notes
      .flatMap((note) => note.tags)
      .sort((a, b) => a.localeCompare(b));
    set({ tags: new Set(tags) });
  },

  // Api Requests
  fetchNotes: async (query) => {
    const res = await getNotesRequest(query);
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
    await get().syncNotes();
    return res.data;
  },

  // Helpers
  syncNotes: async () => {
    await get().setNotes({});
    await get().setTags();
  },
}));
