import styles from "./OpenNote.module.scss";
import { useEditorStore } from "@/features/notes";
import { useCancelNote, useOpenNote, useSaveNote } from "@/features/notes";
import { formatDate } from "@/shared/utils";
import { NoteEditor } from "@/features/notes";

import TagIcon from "@/assets/images/icon-tag.svg?react";
import StatusIcon from "@/assets/images/icon-status.svg?react";
import ClockIcon from "@/assets/images/icon-clock.svg?react";
import { Button } from "@/shared/components";

export const OpenNote = () => {
  const note = useEditorStore((s) => s.activeNote);
  const { handleNoteTitle, handleNoteContent, handleNoteTags } = useOpenNote();
  const handleSave = useSaveNote();
  const handleCancel = useCancelNote();

  return (
    <div className={styles.note}>
      <h1 className={styles.note__title}>
        <input
          type="text"
          placeholder="Enter a title..."
          value={note.title}
          onChange={handleNoteTitle}
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
              onChange={handleNoteTags}
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
        <NoteEditor content={note.content} onChange={handleNoteContent} />
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
