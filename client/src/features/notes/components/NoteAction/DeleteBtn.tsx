// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useDialogStore } from "@/shared/stores";
import { LabelWithIcon } from "@/shared/components";
import styles from "./NoteAction.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const DeleteBtn = () => {
  const setDialogIsOpen = useDialogStore((s) => s.setDialogIsOpen);
  const setDialogPurpose = useDialogStore((s) => s.setDialogPurpose);

  return (
    <LabelWithIcon
      as="button"
      className={`${styles["note__action"]} ${styles["note__action--delete"]}`}
      label="Delete Note"
      icon="icon-delete"
      onClick={() => {
        setDialogPurpose("delete");
        setDialogIsOpen(true);
      }}
    />
  );
};
