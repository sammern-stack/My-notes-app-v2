import styles from "./NoteAction.module.scss";
import { useDialogStore, useEditorStore } from "@/shared/stores";
import { LabelWithIcon } from "@/shared/components";

import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";

export const ArchiveBtn = () => {
  const { openDialog } = useDialogStore.getState();
  const { isArchived } = useEditorStore((s) => s.activeNote);

  return (
    <LabelWithIcon
      as="button"
      className={`${styles["note__action"]} ${styles["note__action--archive"]}`}
      icon={isArchived ? RestoreIcon : ArchiveIcon}
      label={isArchived ? "Restore Note" : "Archive Note"}
      onClick={() => openDialog(isArchived ? "restoreNote" : "archiveNote")}
    />
  );
};
