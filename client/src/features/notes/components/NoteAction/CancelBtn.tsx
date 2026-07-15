// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore, useNotesStore } from "@stores";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const CancelBtn = () => {
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const cashedSelectedId = useEditorStore((s) => s.cashedSelectedId);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const fetchNote = useNotesStore((s) => s.fetchNote);

  const handleCancel = async () => {
    if (editorState === "creating") {
      setEditorState("updating");
      setSelectedNoteId(cashedSelectedId);
      setCashedSelectedId(null);
    }

    if (selectedNoteId && editorState === "updating") {
      const prevNote = await fetchNote(selectedNoteId);
      setActiveNote({
        title: prevNote.title,
        tags: prevNote.tags.join(", "),
        content: prevNote.content,
        createdAt: prevNote.createdAt,
        updatedAt: prevNote.updatedAt,
      });
    }
  };

  return (
    <button
      className="note__action note__action--cancel"
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
};
