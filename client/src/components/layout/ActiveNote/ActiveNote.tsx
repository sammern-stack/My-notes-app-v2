// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

import {
  NoteAction,
  NoteEditor,
  NoteProperty,
} from "@components/features/Notes";

import type { InputChangeEvent } from "@types";

import "./ActiveNote.scss";

// ——— ActiveNote Component ————————————————————————————————————————————————————————————————————————
export const ActiveNote = () => {
  const { title, tags, content } = useEditorStore((s) => s.activeNote);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);

  const handleTitleChange = (e: InputChangeEvent) => {
    setActiveNoteField("title", e.target.value);
  };

  const handleTagsChange = (e: InputChangeEvent) => {
    setActiveNoteField("tags", e.target.value);
  };

  const handleChange = (html: string) => {
    setActiveNoteField("content", html);
  };

  return (
    <div className="note">
      <h1 className="note__title">
        <input
          type="text"
          placeholder="Enter a title..."
          value={title}
          onChange={handleTitleChange}
        />
      </h1>

      <div className="note__properties">
        <NoteProperty label="tags" icon="icon-tag">
          <input
            type="text"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
            value={tags}
            onChange={handleTagsChange}
          />
        </NoteProperty>

        <NoteProperty label="last edited" icon="icon-clock">
          Not note saved
        </NoteProperty>
      </div>

      <div className="note__divider"></div>

      <div className="note__content">
        <NoteEditor content={content} onChange={handleChange} />
      </div>

      <div className="note__divider"></div>

      <div className="note__actions">
        <NoteAction position="note" action="save" />
        <NoteAction position="note" action="cancel" />
      </div>
    </div>
  );
};
