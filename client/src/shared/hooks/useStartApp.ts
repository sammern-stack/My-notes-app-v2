import { useEffect } from "react";
import { useEditorStore } from "@/features/notes";
import { useGetNote } from "@/features/notes";

export const useStartApp = () => {
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const { data: note } = useGetNote(selectedNoteId ?? "");

  useEffect(() => {
    if (!note) return;
    setActiveNote({ ...note, tags: note.tags.join(", ") });
  }, [note, setActiveNote]);
};
