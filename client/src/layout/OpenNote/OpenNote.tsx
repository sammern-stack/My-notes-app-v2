// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@/shared/stores";

import { useOpenNote } from "@/features/notes";

import { NoteAction, NoteEditor, NoteProperty } from "@/features/notes";

import styles from "./OpenNote.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const OpenNote = () => {
  const { title, content, isArchived } = useEditorStore((s) => s.activeNote);
  const { handleNoteTitle, handleNoteContent } = useOpenNote();

  return (
    <div className={styles.note}>
      <h1 className={styles["note__title"]}>
        <input
          type="text"
          placeholder="Enter a title..."
          value={title}
          onChange={handleNoteTitle}
        />
      </h1>

      <div className={styles["note__properties"]}>
        <NoteProperty property="tags" />
        {isArchived && <NoteProperty property="status" />}
        <NoteProperty property="date" date="updatedAt" />
      </div>

      <div className={styles["note__divider"]}></div>

      <div className={styles["note__content"]}>
        <NoteEditor content={content} onChange={handleNoteContent} />
      </div>

      <div className={styles["note__divider"]}></div>

      <div className={styles["note__actions"]}>
        <NoteAction action="save" />
        <NoteAction action="cancel" />
      </div>
    </div>
  );
};
