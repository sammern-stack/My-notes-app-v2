// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { NoteAction } from "@/features/notes";

import styles from "./Sidebar.module.scss";

// ——— Components ——————————————————————————————————————————————————————————————————————————————————
export const ActiveNoteActions = () => {
  return (
    <div className={`${styles.sidebar} ${styles["sidebar--right"]}`}>
      <NoteAction action="archive" />
      <NoteAction action="delete" />
    </div>
  );
};
