// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore, useNotesStore } from "@stores";

// ——— Helper ——————————————————————————————————————————————————————————————————————————————————————
const normalizeTags = (tags: string) =>
  tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const SaveBtn = () => {
  const activeNote = useEditorStore((s) => s.activeNote);
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const createNewNote = useNotesStore((s) => s.createNewNote);

  const handleSave = async () => {
    if (editorState === "creating") {
      const newNote = await createNewNote({
        ...activeNote,
        tags: normalizeTags(activeNote.tags),
      });

      setSelectedNoteId(newNote._id);
      setEditorState("updating");
    }
  };

  return (
    <button className="note__action note__action--save" onClick={handleSave}>
      Save Note
    </button>
  );
};
