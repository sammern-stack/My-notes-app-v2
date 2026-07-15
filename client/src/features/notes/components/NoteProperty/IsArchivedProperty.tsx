// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { LabelWithIcon } from "@/shared/components";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const IsArchivedProperty = () => (
  <div className="note__isArchived">
    <LabelWithIcon
      className="note__isArchived-label"
      icon="icon-status"
      label="Status"
    />

    <div className="note__isArchived-value">Archived</div>
  </div>
);
