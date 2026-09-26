import styles from "./Dialog.module.scss";
import {
  useDialogStore,
  useEditorStore,
  useFiltersStore,
} from "@/shared/stores";
import {
  useDeleteNote,
  useGetNotes,
  useToggleIsArchived,
} from "@/features/notes";

import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import DeleteIcon from "@/assets/images/icon-delete.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";
import { DialogConfirm } from "./DialogConfirm";

export const Dialog = () => {
  const dialog = useDialogStore((s) => s.dialog);
  const { closeDialog } = useDialogStore.getState();

  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const selectFirstNote = useEditorStore((s) => s.selectFirstNote);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);
  const getQuery = useFiltersStore((s) => s.getQuery);
  const { refetch: refetchNotes } = useGetNotes(getQuery());
  const { mutateAsync: deleteNote } = useDeleteNote();
  const { mutateAsync: toggleIsArchived } = useToggleIsArchived(
    selectedNoteId ?? "",
  );

  if (!dialog) return null;

  const handleDelete = async () => {
    if (!selectedNoteId) return;
    await deleteNote(selectedNoteId);
    const { data: notes = [] } = await refetchNotes();
    selectFirstNote(notes);
    closeDialog();
  };

  const handleArchive = async () => {
    if (!selectedNoteId) return;
    await toggleIsArchived();
    closeDialog();
    setActiveNoteField("isArchived", true);
  };

  const handleRestore = async () => {
    if (!selectedNoteId) return;
    await toggleIsArchived();
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
