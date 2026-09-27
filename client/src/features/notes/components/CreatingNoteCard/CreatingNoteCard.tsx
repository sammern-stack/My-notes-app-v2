import styles from "./CreatingNoteCard.module.scss";
import { useEditorStore } from "@/features/notes";

export const CreatingNoteCard = () => {
  const editorState = useEditorStore((s) => s.editorState);
  if (editorState !== "creating") return null;
  return <div className={styles.creatingNoteCard}>Untitled Note</div>;
};
