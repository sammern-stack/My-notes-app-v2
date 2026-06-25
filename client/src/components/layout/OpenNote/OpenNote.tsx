// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

import { useOpenNote } from "@hooks";

import {
  NoteAction,
  NoteEditor,
  NoteProperty,
} from "@components/features/Notes";

import "./OpenNote.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const OpenNote = () => {
  const { title, content } = useEditorStore((s) => s.activeNote);
  const { handleNoteTitle, handleNoteContent } = useOpenNote();

  return (
    <div className="note">
      <h1 className="note__title">
        <input
          type="text"
          placeholder="Enter a title..."
          value={title}
          onChange={handleNoteTitle}
        />
      </h1>

      <div className="note__properties">
        <NoteProperty property="tags" />
        <NoteProperty property="date" date="updatedAt" />
      </div>

      <div className="note__divider"></div>

      <div className="note__content">
        <NoteEditor content={content} onChange={handleNoteContent} />
      </div>

      <div className="note__divider"></div>

      <div className="note__actions">
        <NoteAction action="save" />
        <NoteAction action="cancel" />
      </div>
    </div>
  );
};
