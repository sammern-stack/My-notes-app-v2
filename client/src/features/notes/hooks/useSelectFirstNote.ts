import { useGetNotes } from "./useNotes";
import { useBuildNotesQuery } from "./useBuildNotesQuery";
import { useEditorStore } from "@/features/notes";
import { useEffect } from "react";

export const useSelectFirstNote = () => {
  const notesQuery = useBuildNotesQuery();
  const { data: notes = [] } = useGetNotes(notesQuery);

  useEffect(() => {
    const { setSelectedNoteId } = useEditorStore.getState();
    setSelectedNoteId(notes[0]?._id ?? "");
  }, [notes]);
};
