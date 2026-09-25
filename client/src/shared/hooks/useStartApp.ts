// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEffect } from "react";
import { useConfigStore, useEditorStore } from "@/shared/stores";
import { useGetNote } from "@/features/notes";

// ——— Start Up App Hook ———————————————————————————————————————————————————————————————————————————
export const useStartApp = () => {
  const theme = useConfigStore((s) => s.theme);
  const font = useConfigStore((s) => s.font);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font", font);
  }, [theme, font]);

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
