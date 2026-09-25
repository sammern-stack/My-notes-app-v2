// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useDialogStore, useEditorStore } from "@/shared/stores";
import { LabelWithIcon } from "@/shared/components";
import styles from "./NoteAction.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const ArchiveBtn = () => {
  const { isArchived } = useEditorStore((s) => s.activeNote);
  const setDialogIsOpen = useDialogStore((s) => s.setDialogIsOpen);
  const setDialogPurpose = useDialogStore((s) => s.setDialogPurpose);

  return (
    <LabelWithIcon
      as="button"
      className={`${styles["note__action"]} ${styles["note__action--archive"]}`}
      label={isArchived ? "Restore Note" : "Archive Note"}
      icon={isArchived ? "icon-restore" : "icon-archive"}
      onClick={() => {
        setDialogPurpose(isArchived ? "restore" : "archive");
        setDialogIsOpen(true);
      }}
    />
  );
};
