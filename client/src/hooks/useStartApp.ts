import { useEffect } from "react";
import { useConfigStore, useNotesStore, useEditorStore } from "@stores";

export const useStartApp = () => {
  const theme = useConfigStore((s) => s.theme);
  const font = useConfigStore((s) => s.font);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font", font);
  }, [theme, font]);

  const setNotes = useNotesStore((s) => s.setNotes);
  const setTags = useNotesStore((s) => s.setTags);

  useEffect(() => {
    setNotes();
    setTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNote = useEditorStore((s) => s.setSelectedNote);
  const fetchNote = useNotesStore((s) => s.fetchNote);

  useEffect(() => {
    (async () => {
      if (!selectedNoteId) return;

      const note = await fetchNote(selectedNoteId);

      setSelectedNote({
        title: note.title,
        tags: note.tags.join(", "),
        content: note.content,
      });
    })();
  }, [selectedNoteId, fetchNote, setSelectedNote]);
};
