import { useCallback } from "react";
import { useEditorStore } from "@/features/notes";
import { EDITOR_EMPTY_NOTE } from "../constants/note";

export const useStartCreateNote = () => {
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);

  return useCallback(() => {
    const {
      setEditorState,
      setCashedSelectedId,
      setSelectedNoteId,
      setActiveNote,
    } = useEditorStore.getState();

    setEditorState("creating");
    setCashedSelectedId(selectedNoteId);
    setSelectedNoteId("");
    setActiveNote(EDITOR_EMPTY_NOTE);
  }, [selectedNoteId]);
};
