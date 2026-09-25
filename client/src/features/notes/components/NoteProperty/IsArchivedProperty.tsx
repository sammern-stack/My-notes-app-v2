// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { LabelWithIcon } from "@/shared/components";
import styles from "./NoteProperty.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const IsArchivedProperty = () => (
  <div className={styles["note__isArchived"]}>
    <LabelWithIcon
      className={styles["note__isArchived-label"]}
      icon="icon-status"
      label="Status"
    />

    <div className={styles["note__isArchived-value"]}>Archived</div>
  </div>
);
