// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { LabelWithIcon } from "@/shared/components";
import StatusIcon from "@/assets/images/icon-status.svg?react";
import styles from "./NoteProperty.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const IsArchivedProperty = () => (
  <div className={styles["note__isArchived"]}>
    <LabelWithIcon
      className={styles["note__isArchived-label"]}
      icon={StatusIcon}
      label="Status"
    />

    <div className={styles["note__isArchived-value"]}>Archived</div>
  </div>
);
