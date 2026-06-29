// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useNotesStore, useEditorStore } from "@stores";
import { LabelWithIcon } from "@/components/shared";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const DeleteBtn = () => {
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const selectFirstNote = useEditorStore((s) => s.selectFirstNote);
  const deleteNote = useNotesStore((s) => s.deleteNote);

  const handleDelete = () => {
    const confirm = window.confirm("Do you wish to delete the note?");
    if (!confirm || !selectedNoteId) return;
    deleteNote(selectedNoteId)
    selectFirstNote();
  };

  return (
    <LabelWithIcon
      as="button"
      className="note__action note__action--delete"
      label="Delete Note"
      icon="icon-delete"
      onClick={handleDelete}
    />
  );
};
