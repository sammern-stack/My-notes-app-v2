// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";

import {
  createNoteRequest,
  deleteNoteRequest,
  getNoteRequest,
  getNotesRequest,
  toggleIsArchivedRequest,
  updateNoteRequest,
} from "@/api/notesApi";

import type {
  CreateNoteBody,
  NoteModel,
  NotesQuery,
  RequestFn,
  UpdateNoteBody,
} from "@types";

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
  updateNote: (id: string, updates: UpdateNoteBody) => Promise<NoteModel>;
  toggleIsArchived: (id: string) => Promise<NoteModel>;
  deleteNote: (id: string) => Promise<void>;

  // Helpers
  syncNotes: () => Promise<void>;
  handleRequest: <T extends object | void>(
    fn: () => RequestFn<T>,
    shouldSync?: boolean,
  ) => Promise<T>;
}

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
    return get().handleRequest(() => getNotesRequest(query), false);
  },

  fetchNote: async (id) => {
    return get().handleRequest(() => getNoteRequest(id), false);
  },

  createNewNote: async (note: CreateNoteBody) => {
    return get().handleRequest(() => createNoteRequest(note));
  },

  updateNote: async (id, updates) => {
    return get().handleRequest(() => updateNoteRequest(id, updates));
  },

  toggleIsArchived: async (id) => {
    return get().handleRequest(() => toggleIsArchivedRequest(id));
  },

  deleteNote: async (id) => {
    await get().handleRequest(() => deleteNoteRequest(id));
  },

  // Helpers
  syncNotes: async () => {
    await get().setNotes({});
    await get().setTags();
  },

  handleRequest: async <T extends object | void>(
    fn: () => RequestFn<T>,
    shouldSync = true,
  ) => {
    const res = await fn();
    if (!res.ok) throw new Error(`Error occurred: ${res.error}`);

    if (shouldSync) await get().syncNotes();

    return res.data;
  },
}));
