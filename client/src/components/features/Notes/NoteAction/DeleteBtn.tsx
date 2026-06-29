// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useDialogStore } from "@stores";
import { LabelWithIcon } from "@/components/shared";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const DeleteBtn = () => {
  const setDialogIsOpen = useDialogStore((s) => s.setDialogIsOpen);
  const setDialogPurpose = useDialogStore((s) => s.setDialogPurpose);

  return (
    <LabelWithIcon
      as="button"
      className="note__action note__action--delete"
      label="Delete Note"
      icon="icon-delete"
      onClick={() => {
        setDialogPurpose("delete");
        setDialogIsOpen(true);
      }}
    />
  );
};
