// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useDialogStore, useEditorStore } from "@stores";
import { LabelWithIcon } from "@/components/shared";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const ArchiveBtn = () => {
  const { isArchived } = useEditorStore((s) => s.activeNote);
  const setDialogIsOpen = useDialogStore((s) => s.setDialogIsOpen);
  const setDialogPurpose = useDialogStore((s) => s.setDialogPurpose);

  return (
    <LabelWithIcon
      as="button"
      className="note__action note__action--archive"
      label={isArchived ? "Restore Note" : "Archive Note"}
      icon={isArchived ? "icon-restore" : "icon-archive"}
      onClick={() => {
        setDialogPurpose(isArchived ? "restore" : "archive");
        setDialogIsOpen(true);
      }}
    />
  );
};
