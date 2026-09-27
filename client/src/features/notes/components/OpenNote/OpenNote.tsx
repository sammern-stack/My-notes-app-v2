import styles from "./OpenNote.module.scss";

import {
  NoteEditor,
  useCancelNote,
  useSaveNote,
  useEditorStore,
} from "@/features/notes";

import { formatDate } from "@/shared/utils";
import { Button } from "@/shared/components";

import TagIcon from "@/assets/images/icon-tag.svg?react";
import StatusIcon from "@/assets/images/icon-status.svg?react";
import ClockIcon from "@/assets/images/icon-clock.svg?react";

export const OpenNote = () => {
  const note = useEditorStore((s) => s.activeNote);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);
  const handleSave = useSaveNote();
  const handleCancel = useCancelNote();

  return (
    <div className={styles.note}>
      <h1 className={styles.note__title}>
        <input
          type="text"
          placeholder="Enter a title..."
          value={note.title}
          onChange={(e) => setActiveNoteField("title", e.target.value)}
        />
      </h1>
      <div className={styles.note__properties}>
        <div className={styles.note__property}>
          <p className={styles.note__propertyLabel}>
            <TagIcon /> Tags
          </p>
          <div className={styles.note__propertyValue}>
            <input
              type="text"
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
              value={note.tags}
              onChange={(e) => setActiveNoteField("tags", e.target.value)}
            />
          </div>
        </div>
        {note.isArchived && (
          <div className={styles.note__property}>
            <p className={styles.note__propertyLabel}>
              <StatusIcon /> Status
            </p>
            <div className={styles.note__propertyValue}>Archived</div>
          </div>
        )}
        <div className={styles.note__property}>
          <p className={styles.note__propertyLabel}>
            <ClockIcon /> UpdatedAt
          </p>
          <div className={styles.note__propertyValue}>
            {formatDate(note.updatedAt)}
          </div>
        </div>
      </div>
      <div className={styles.note__divider}></div>
      <div className={styles.note__content}>
        <NoteEditor
          content={note.content}
          onChange={(html) => setActiveNoteField("content", html)}
        />
      </div>
      <div className={styles.note__divider}></div>
      <div className={styles.note__actions}>
        <Button onClick={handleSave}>Save Note</Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
