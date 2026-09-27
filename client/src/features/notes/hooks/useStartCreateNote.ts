import { useCallback } from "react";
import { useEditorStore } from "@/features/notes";
import { EDITOR_EMPTY_NOTE } from "../constants/note";

export const useStartCreateNote = () => {
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);

  return useCallback(() => {
    setEditorState("creating");
    setCashedSelectedId(selectedNoteId);
    setSelectedNoteId("");
    setActiveNote(EDITOR_EMPTY_NOTE);
  }, [
    setEditorState,
    setCashedSelectedId,
    setSelectedNoteId,
    setActiveNote,
    selectedNoteId,
  ]);
};
