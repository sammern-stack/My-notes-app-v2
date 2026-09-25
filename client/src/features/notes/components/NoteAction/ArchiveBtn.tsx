import { useDialogStore, useEditorStore } from "@/shared/stores";
import { LabelWithIcon } from "@/shared/components";
import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";
import styles from "./NoteAction.module.scss";

export const ArchiveBtn = () => {
  const { isArchived } = useEditorStore((s) => s.activeNote);
  const setDialogIsOpen = useDialogStore((s) => s.setDialogIsOpen);
  const setDialogPurpose = useDialogStore((s) => s.setDialogPurpose);

  return (
    <LabelWithIcon
      as="button"
      className={`${styles["note__action"]} ${styles["note__action--archive"]}`}
      icon={isArchived ? RestoreIcon : ArchiveIcon}
      label={isArchived ? "Restore Note" : "Archive Note"}
      onClick={() => {
        setDialogPurpose(isArchived ? "restore" : "archive");
        setDialogIsOpen(true);
      }}
    />
  );
};
