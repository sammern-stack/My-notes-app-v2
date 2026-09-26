import styles from "./NoteAction.module.scss";
import { useDialogStore } from "@/shared/stores";
import { LabelWithIcon } from "@/shared/components";

import DeleteIcon from "@/assets/images/icon-delete.svg?react";

export const DeleteBtn = () => {
  const { openDialog } = useDialogStore.getState();

  return (
    <LabelWithIcon
      as="button"
      className={`${styles["note__action"]} ${styles["note__action--delete"]}`}
      icon={DeleteIcon}
      label="Delete Note"
      onClick={() => openDialog("deleteNote")}
    />
  );
};
