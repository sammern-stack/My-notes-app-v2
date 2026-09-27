import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";
import { useEditorStore } from "../../stores/editorStore";
import { useGetNote } from "../useNotes";

export const useCancelNote = () => {
  const { editorState, selectedNoteId, cashedSelectedId } = useEditorStore(
    useShallow((s) => ({
      editorState: s.editorState,
      selectedNoteId: s.selectedNoteId,
      cashedSelectedId: s.cashedSelectedId,
    })),
  );
  const { refetch: refetchNote } = useGetNote(selectedNoteId);

  return useCallback(async () => {
    const {
      setEditorState,
      setSelectedNoteId,
      setCashedSelectedId,
      setActiveNote,
    } = useEditorStore.getState();

    if (editorState === "creating") {
      setEditorState("updating");
      setSelectedNoteId(cashedSelectedId);
      setCashedSelectedId("");
    }

    if (selectedNoteId && editorState === "updating") {
      const { data: prevNote } = await refetchNote();
      if (!prevNote) return;
      setActiveNote({ ...prevNote, tags: prevNote.tags.join(", ") });
    }
  }, [cashedSelectedId, editorState, refetchNote, selectedNoteId]);
};
