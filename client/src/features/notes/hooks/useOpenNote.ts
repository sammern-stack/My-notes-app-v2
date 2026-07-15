// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

import type { InputChangeEvent } from "@types";

// ——— Custom Hook —————————————————————————————————————————————————————————————————————————————————
export const useOpenNote = () => {
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);

  const handleNoteTitle = (e: InputChangeEvent) =>
    setActiveNoteField("title", e.target.value);

  const handleNoteTags = (e: InputChangeEvent) =>
    setActiveNoteField("tags", e.target.value);

  const handleNoteContent = (html: string) =>
    setActiveNoteField("content", html);

  return {
    handleNoteTitle,
    handleNoteTags,
    handleNoteContent,
  };
};
