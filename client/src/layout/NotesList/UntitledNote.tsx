// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@/shared/stores";
import styles from "@/features/notes/components/NoteCard/NoteCard.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const UntitledNote = () => {
  const editorState = useEditorStore((s) => s.editorState);

  if (editorState !== "creating") return null;

  return (
    <div
      className={`${styles["notes__card"]} ${styles["notes__card--active"]} ${styles["notes__card-title"]}`}
    >
      Untitled Note
    </div>
  );
};
