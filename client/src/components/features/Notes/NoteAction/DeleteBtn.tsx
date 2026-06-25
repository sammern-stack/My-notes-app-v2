// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { LabelWithIcon } from "@/components/shared";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const DeleteBtn = () => {
  return (
    <LabelWithIcon
      as="button"
      className="note__action note__action--delete"
      label="Delete Note"
      icon="icon-delete"
    />
  );
};
