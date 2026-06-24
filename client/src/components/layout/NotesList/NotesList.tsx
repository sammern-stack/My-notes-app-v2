import { useNotesStore, useEditorStore, useFiltersStore } from "@stores";
import { NoteCard } from "@components/features/Notes";
import "./NotesList.scss";

export const NotesList = () => {
  const notes = useNotesStore((s) => s.notes);
  const editorState = useEditorStore((s) => s.editorState);
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);
  const renderOption = useFiltersStore((s) => s.renderOption);

  return (
    <div className="notes__list">
      <button className="notes__create-btn" onClick={() => startCreatingNote()}>
        + Create New Note
      </button>

      <div className="notes__list-content">
        {renderOption === "archived" && (
          <div className="notes__archived-text">
            All your archived notes are stored here. You can restore or delete
            them anytime.
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
  );
};
