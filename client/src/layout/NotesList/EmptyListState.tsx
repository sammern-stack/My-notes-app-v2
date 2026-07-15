import { useEditorStore, useFiltersStore } from "@/stores";

export const EmptyListState = () => {
  const emptyStateText = useFiltersStore((s) => s.generateEmptyStateText());
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);

  const handleCreateNote = () => startCreatingNote();

  if (!emptyStateText) return null;

  return (
    <div className="notes__empty-state">
      {emptyStateText}{" "}
      {emptyStateText.endsWith(", or") && (
        <span onClick={handleCreateNote}>create new note</span>
      )}
    </div>
  );
};
