// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";
import { persist } from "zustand/middleware";

// ——— Constants ———————————————————————————————————————————————————————————————————————————————————
const EDITOR_EMPTY_NOTE = {
  title: "",
  tags: "",
  content: "",
};

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type EditorState = "updating" | "creating";
type NullString = string | null;
type EditorNote = {
  title: string;
  tags: string;
  content: string;
};

interface EditorStore {
  // States
  editorState: EditorState;
  setEditorState: (state: EditorState) => void;

  selectedNoteId: NullString;
  setSelectedNoteId: (id: NullString) => void;

  cashedSelectedId: NullString;
  setCashedSelectedId: (id: NullString) => void;

  activeNote: EditorNote;
  setActiveNote: (note: EditorNote) => void;
  setActiveNoteField: (field: keyof EditorNote, value: string) => void;

  // Actions
  startCreatingNote: () => void;
}

// ——— Editor Store ————————————————————————————————————————————————————————————————————————————————
export const useEditorStore = create<EditorStore>()(
  persist(
    (set, get) => ({
      // States
      editorState: "updating",
      setEditorState: (state) => set({ editorState: state }),

      selectedNoteId: null,
      setSelectedNoteId: (id) => set({ selectedNoteId: id }),

      cashedSelectedId: null,
      setCashedSelectedId: (id) => set({ cashedSelectedId: id }),

      activeNote: EDITOR_EMPTY_NOTE,
      setActiveNote: (note) => set({ activeNote: note }),
      setActiveNoteField: (field, value) => {
        set((s) => ({ activeNote: { ...s.activeNote, [field]: value } }));
      },

      // Actions
      startCreatingNote: () => {
        get().setEditorState("creating");
        get().setCashedSelectedId(get().selectedNoteId);
        get().setSelectedNoteId(null);
        get().setActiveNote(EDITOR_EMPTY_NOTE);
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
