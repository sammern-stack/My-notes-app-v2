import styles from "./OpenNote.module.scss";
import { useEditorStore } from "@/shared/stores";
import {
  useCreateNote,
  useGetNote,
  useOpenNote,
  useUpdateNote,
} from "@/features/notes";
import { formatDate } from "@/shared/utils";
import { NoteEditor } from "@/features/notes";

import TagIcon from "@/assets/images/icon-tag.svg?react";
import StatusIcon from "@/assets/images/icon-status.svg?react";
import ClockIcon from "@/assets/images/icon-clock.svg?react";
import { Button } from "@/shared/components";

const normalizeTags = (tags: string) =>
  tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

export const OpenNote = () => {
  const note = useEditorStore((s) => s.activeNote);
  const { handleNoteTitle, handleNoteContent } = useOpenNote();
  const { setActiveNoteField } = useEditorStore.getState();
  const activeNote = useEditorStore((s) => s.activeNote);
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const cashedSelectedId = useEditorStore((s) => s.cashedSelectedId);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const { refetch: refetchNote } = useGetNote(selectedNoteId ?? "");
  const { mutateAsync: createNote } = useCreateNote();
  const { mutateAsync: updateNote } = useUpdateNote(selectedNoteId ?? "");

  const handleSave = async () => {
    if (editorState === "creating") {
      const newNote = await createNote({
        ...activeNote,
        tags: normalizeTags(activeNote.tags),
      });

      setSelectedNoteId(newNote._id);
      setEditorState("updating");
    }

    if (selectedNoteId && editorState === "updating") {
      const updatedNote = await updateNote({
        title: activeNote.title,
        tags: normalizeTags(activeNote.tags),
        content: activeNote.content,
      });

      setSelectedNoteId(updatedNote._id);

      setActiveNote({
        title: updatedNote.title,
        tags: updatedNote.tags.join(", "),
        content: updatedNote.content,
        isArchived: updatedNote.isArchived,
        createdAt: updatedNote.createdAt,
        updatedAt: updatedNote.updatedAt,
      });
    }
  };

  const handleCancel = async () => {
    if (editorState === "creating") {
      setEditorState("updating");
      setSelectedNoteId(cashedSelectedId);
      setCashedSelectedId(null);
    }

    if (selectedNoteId && editorState === "updating") {
      const { data: prevNote } = await refetchNote();
      if (!prevNote) return;
      setActiveNote({
        title: prevNote.title,
        tags: prevNote.tags.join(", "),
        content: prevNote.content,
        createdAt: prevNote.createdAt,
        updatedAt: prevNote.updatedAt,
        isArchived: prevNote.isArchived,
      });
    }
  };

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
