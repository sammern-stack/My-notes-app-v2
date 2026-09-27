import styles from "./Dialog.module.scss";
import { useDialogStore } from "@/shared/stores";
import { useEditorStore } from "@/features/notes";
import { useDeleteNote, useToggleIsArchived } from "@/features/notes";

import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import DeleteIcon from "@/assets/images/icon-delete.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";
import { DialogConfirm } from "./DialogConfirm";

export const Dialog = () => {
  const dialog = useDialogStore((s) => s.dialog);
  const { closeDialog } = useDialogStore.getState();

  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);
  const { mutate: deleteNote } = useDeleteNote();
  const { mutate: toggleIsArchived } = useToggleIsArchived(selectedNoteId);

  if (!dialog) return null;

  const handleDelete = () => {
    if (!selectedNoteId) return;
    deleteNote(selectedNoteId);
    setSelectedNoteId("");
    closeDialog();
  };

  const handleArchive = () => {
    if (!selectedNoteId) return;
    toggleIsArchived();
    closeDialog();
    setActiveNoteField("isArchived", true);
  };

  const handleRestore = () => {
    if (!selectedNoteId) return;
    toggleIsArchived();
    closeDialog();
    setActiveNoteField("isArchived", false);
  };

  return (
    <>
      {dialog.type === "deleteNote" && (
        <DialogConfirm
          icon={DeleteIcon}
          title="Delete Note"
          action={handleDelete}
        >
          Are you sure you want to permanently delete this note? This action
          cannot be undone.
        </DialogConfirm>
      )}
      {dialog.type === "archiveNote" && (
        <DialogConfirm
          icon={ArchiveIcon}
          title="Archive Note"
          action={handleArchive}
        >
          Are you sure you want to archive this note? You can find it in the
          Archived Notes section and restore it anytime.
        </DialogConfirm>
      )}
      {dialog.type === "restoreNote" && (
        <DialogConfirm
          icon={RestoreIcon}
          title="Restore Note"
          action={handleRestore}
        >
          Are you sure you want to restore this note?
        </DialogConfirm>
      )}
      <div className={styles.dialog__backdrop}></div>
    </>
  );
};
