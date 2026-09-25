import { useEditorStore } from "@/shared/stores";
import styles from "@/layout/NotesList/NotesList.module.scss";

export const CreateBtn = () => {
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);

  const handleCreateNote = () => startCreatingNote();

  return (
    <button className={styles["notes__create-btn"]} onClick={handleCreateNote}>
      + Create New Note
    </button>
  );
};
