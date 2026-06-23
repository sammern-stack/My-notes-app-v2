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

  activeNote: EditorNote;
  setActiveNote: (note: EditorNote) => void;
  setActiveNoteField: (field: keyof EditorNote, value: string) => void;
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

      activeNote: {
        title: "",
        tags: "",
        content: "",
      },

      setActiveNote: (note) => set({ activeNote: note }),

      setActiveNoteField: (field, value) => {
        set((s) => ({ activeNote: { ...s.activeNote, [field]: value } }));
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
