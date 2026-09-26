import { useEffect } from "react";
import { useEditorStore } from "@/shared/stores";
import { useGetNote } from "@/features/notes";

export const useStartApp = () => {
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const { data: note } = useGetNote(selectedNoteId ?? "");

  useEffect(() => {
    if (!note) return;

    setActiveNote({
      title: note.title,
      tags: note.tags.join(", "),
      content: note.content,
      isArchived: note.isArchived,
      updatedAt: note.updatedAt,
      createdAt: note.createdAt,
    });
  }, [note, setActiveNote]);
};
