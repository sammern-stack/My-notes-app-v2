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

  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const fetchNote = useNotesStore((s) => s.fetchNote);

  useEffect(() => {
    const renderActiveNote = async () => {
      if (!selectedNoteId) return;
      const { title, tags, content } = await fetchNote(selectedNoteId);
      setActiveNote({ title, tags: tags.join(", "), content });
    };
    renderActiveNote();
  }, [selectedNoteId, fetchNote, setActiveNote]);
};
