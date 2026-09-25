import { useEditorStore, useFiltersStore } from "@/shared/stores";
import styles from "./NotesList.module.scss";

interface EmptyListStateProps {
  notesCount: number;
}

export const EmptyListState = ({ notesCount }: EmptyListStateProps) => {
  const emptyStateText = useFiltersStore((s) =>
    s.generateEmptyStateText(notesCount),
  );
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);

  const handleCreateNote = () => startCreatingNote();

  if (!emptyStateText) return null;

  return (
    <div className={styles["notes__empty-state"]}>
      {emptyStateText}{" "}
      {emptyStateText.endsWith(", or") && (
        <span onClick={handleCreateNote}>create new note</span>
      )}
    </div>
  );
};
