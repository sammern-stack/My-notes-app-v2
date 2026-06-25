// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { LabelWithIcon } from "@/components/shared";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const ArchiveBtn = () => {
  return (
    <LabelWithIcon
      as="button"
      className="note__action note__action--archive"
      label="Archive Note"
      icon="icon-archive"
    />
  );
};
