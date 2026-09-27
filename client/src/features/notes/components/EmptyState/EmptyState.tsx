import styles from "./EmptyState.module.scss";
import { useEmptyText } from "@/features/filters";
import { useStartCreateNote } from "../../hooks/useStartCreateNote";

interface EmptyStateProps {
  notesLength: number;
}

export const EmptyState = ({ notesLength }: EmptyStateProps) => {
  const emptyText = useEmptyText(notesLength);
  const startCreatingNote = useStartCreateNote();
  if (!emptyText) return null;
  return (
    <div className={styles.emptyState}>
      {emptyText}{" "}
      {emptyText.endsWith(", or") && (
        <span onClick={() => startCreatingNote()}>create new note</span>
      )}
    </div>
  );
};
