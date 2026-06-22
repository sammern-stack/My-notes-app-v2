// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";
import { persist } from "zustand/middleware";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type EditorState = "updating" | "creating";
type NullString = string | null;
type EditorNote = {
  title: string;
  tags: string;
  content: string;
};

interface EditorStore {
  editorState: EditorState;
  setEditorState: (state: EditorState) => void;

  selectedNoteId: NullString;
  setSelectedNoteId: (id: NullString) => void;

  cashedSelectedId: NullString;
  setCashedSelectedId: (id: NullString) => void;

  selectedNote: EditorNote;
  setSelectedNote: (note: EditorNote) => void;
  setSelectedNoteTitle: (title: string) => void;
  setSelectedNoteTags: (tags: string) => void;
  setSelectedNoteContent: (content: string) => void;
}

// ——— Editor Store ————————————————————————————————————————————————————————————————————————————————
export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      editorState: "updating",
      setEditorState: (state) => set({ editorState: state }),

      selectedNoteId: null,
      setSelectedNoteId: (id) => set({ selectedNoteId: id }),

      cashedSelectedId: null,
      setCashedSelectedId: (id) => set({ cashedSelectedId: id }),

      selectedNote: {
        title: "",
        tags: "",
        content: "",
      },

      setSelectedNote: (note) => set({ selectedNote: note }),

      setSelectedNoteTitle: (title) => {
        set((s) => ({ selectedNote: { ...s.selectedNote, title } }));
      },

      setSelectedNoteTags: (tags) => {
        set((s) => ({ selectedNote: { ...s.selectedNote, tags } }));
      },

      setSelectedNoteContent: (content) => {
        set((s) => ({ selectedNote: { ...s.selectedNote, content } }));
      },
    }),
    {
      name: "editor",
      partialize: (s) => ({
        selectedNoteId: s.selectedNoteId,
      }),
    },
  ),
);
