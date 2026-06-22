import { useEditorStore } from "@stores";
import { NoteAction, NoteProperty } from "@components/features/Notes";
import "./ActiveNote.scss";

export const ActiveNote = () => {
  const selectedNote = useEditorStore((s) => s.selectedNote);
  const setSelectedNoteTitle = useEditorStore((s) => s.setSelectedNoteTitle);
  const setSelectedNoteTags = useEditorStore((s) => s.setSelectedNoteTags);

  return (
    <div className="note">
      <h1 className="note__title">
        <input
          type="text"
          placeholder="Enter a title..."
          value={selectedNote.title}
          onChange={(e) => setSelectedNoteTitle(e.target.value)}
        />
      </h1>

      <div className="note__properties">
        <NoteProperty label="tags" icon="icon-tag">
          <input
            type="text"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
            value={selectedNote.tags}
            onChange={(e) => setSelectedNoteTags(e.target.value)}
          />
        </NoteProperty>

        <NoteProperty label="last edited" icon="icon-clock">
          Not note saved
        </NoteProperty>
      </div>

      <div className="note__divider"></div>

      <div className="note__content">
        <p>Start typing your note here...</p>
      </div>

      <div className="note__divider"></div>

      <div className="note__actions">
        <NoteAction position="note" action="save" />
        <NoteAction position="note" action="cancel" />
      </div>
    </div>
  );
};
