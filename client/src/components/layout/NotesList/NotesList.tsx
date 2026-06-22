import { useNotesStore, useEditorStore } from "@stores";
import { NoteCard } from "@components/features/Notes";
import "./NotesList.scss";

export const NotesList = () => {
  const notes = useNotesStore((s) => s.notes);
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const setSelectedNote = useEditorStore((s) => s.setSelectedNote);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);

  return (
    <div className="notes__list">
      <button
        className="notes__create-btn"
        onClick={() => {
          setEditorState("creating");
          setCashedSelectedId(selectedNoteId);
          setSelectedNoteId(null);
          setSelectedNote({
            title: "",
            tags: "",
            content: "",
          });
        }}
      >
        + Create New Note
      </button>

      <div className="notes__list-content">
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
