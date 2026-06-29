// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEffect } from "react";
import {
  useConfigStore,
  useNotesStore,
  useEditorStore,
  useFiltersStore,
} from "@stores";

// ——— Start Up App Hook ———————————————————————————————————————————————————————————————————————————
export const useStartApp = () => {
  const theme = useConfigStore((s) => s.theme);
  const font = useConfigStore((s) => s.font);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font", font);
  }, [theme, font]);

  const applyFilters = useFiltersStore((s) => s.applyFilters);
  const setTags = useNotesStore((s) => s.setTags);

  useEffect(() => {
    applyFilters();
    setTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const fetchNote = useNotesStore((s) => s.fetchNote);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);

  useEffect(() => {
    const renderActiveNote = async () => {
      if (!selectedNoteId) return;
      const note = await fetchNote(selectedNoteId);

      setActiveNote({
        title: note.title,
        tags: note.tags.join(", "),
        content: note.content,
        updatedAt: note.updatedAt,
        createdAt: note.createdAt,
      });
    };
    renderActiveNote();
  }, [selectedNoteId, fetchNote, setActiveNote]);
};
