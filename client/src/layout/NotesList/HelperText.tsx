import { useFiltersStore } from "@/shared/stores";
import styles from "./NotesList.module.scss";

export const HelperText = () => {
  const helperText = useFiltersStore((s) => s.generateHelperText());

  if (!helperText) return null;

  return <div className={styles["notes__archived-text"]}>{helperText}</div>;
};
