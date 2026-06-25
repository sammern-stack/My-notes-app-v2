// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useNotesStore, useEditorStore, useFiltersStore } from "@stores";

import { NoteCard } from "@components/features/Notes";

import "./NotesList.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const NotesList = () => {
  const notes = useNotesStore((s) => s.notes);
  const editorState = useEditorStore((s) => s.editorState);
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);
  const helperText = useFiltersStore((s) => s.generateHelperText());
  const emptyStateText = useFiltersStore((s) => s.generateEmptyStateText());

  const handleCreateNote = () => startCreatingNote();

  return (
    <div className="notes__list">
      <div className="notes__wrapper">
        <button className="notes__create-btn" onClick={handleCreateNote}>
          + Create New Note
        </button>

        <div className="notes__list-content">
          {helperText && (
            <div className="notes__archived-text">{helperText}</div>
          )}

          {emptyStateText && (
            <div className="notes__empty-state">
              {emptyStateText}{" "}
              {emptyStateText.endsWith(", or") && (
                <span onClick={handleCreateNote}>create new note</span>
              )}
            </div>
          )}

          {editorState === "creating" && (
            <div className="notes__card notes__card--active notes__card-title">
              Untitled Note
            </div>
          )}

          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};
