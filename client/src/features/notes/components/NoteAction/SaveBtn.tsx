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
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const createNewNote = useNotesStore((s) => s.createNewNote);
  const updateNote = useNotesStore((s) => s.updateNote);

  const handleSave = async () => {
    if (editorState === "creating") {
      const newNote = await createNewNote({
        ...activeNote,
        tags: normalizeTags(activeNote.tags),
      });

      setSelectedNoteId(newNote._id);
      setEditorState("updating");
    }

    if (selectedNoteId && editorState === "updating") {
      const updatedNote = await updateNote(selectedNoteId, {
        title: activeNote.title,
        tags: normalizeTags(activeNote.tags),
        content: activeNote.content,
      });

      setSelectedNoteId(updatedNote._id);

      setActiveNote({
        title: updatedNote.title,
        tags: updatedNote.tags.join(", "),
        content: updatedNote.content,
        isArchived: updatedNote.isArchived,
        createdAt: updatedNote.createdAt,
        updatedAt: updatedNote.updatedAt,
      });
    }
  };

  return (
    <button className="note__action note__action--save" onClick={handleSave}>
      Save Note
    </button>
  );
};
