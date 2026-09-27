import { create } from "zustand";
import { persist } from "zustand/middleware";

const EDITOR_EMPTY_NOTE = {
  title: "",
  tags: "",
  content: "",
  isArchived: false,
  updatedAt: "",
  createdAt: "",
};

type EditorState = "updating" | "creating";
type EditorNote = {
  title: string;
  tags: string;
  content: string;
  isArchived: boolean;
  updatedAt: string;
  createdAt: string;
};

interface EditorStore {
  editorState: EditorState;
  setEditorState: (state: EditorState) => void;

  selectedNoteId: string;
  setSelectedNoteId: (id: string) => void;

  cashedSelectedId: string;
  setCashedSelectedId: (id: string) => void;

  activeNote: EditorNote;
  setActiveNote: (note: EditorNote) => void;
  setActiveNoteField: (
    field: keyof EditorNote,
    value: string | boolean,
  ) => void;
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      editorState: "updating",
      setEditorState: (state) => set({ editorState: state }),

      selectedNoteId: "",
      setSelectedNoteId: (id) => set({ selectedNoteId: id }),

      cashedSelectedId: "",
      setCashedSelectedId: (id) => set({ cashedSelectedId: id }),

      activeNote: EDITOR_EMPTY_NOTE,
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
