import styles from "./Home.module.scss";

import {
  NoteCard,
  useBuildNotesQuery,
  useGetNotes,
  useStartCreateNote,
  useSelectFirstNote,
} from "@/features/notes";

import { useEmptyText, useHelperText } from "@/features/filters";
import { OpenNote, PageLayout } from "@/layout";
import { Button, Dialog } from "@/shared/components";
import { useDialogStore, useEditorStore } from "@/shared/stores";

import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";
import DeleteIcon from "@/assets/images/icon-delete.svg?react";

const Home = () => {
  useSelectFirstNote();

  const notesQuery = useBuildNotesQuery();
  const { data: notes = [] } = useGetNotes(notesQuery);

  const emptyText = useEmptyText(notes.length);
  const helperText = useHelperText();
  const startCreatingNote = useStartCreateNote();

  const editorState = useEditorStore((s) => s.editorState);
  const { openDialog } = useDialogStore.getState();
  const { isArchived } = useEditorStore((s) => s.activeNote);

  const handleArchive = () => {
    openDialog(isArchived ? "restoreNote" : "archiveNote");
  };

  const handleDelete = () => openDialog("deleteNote");

  return (
    <PageLayout>
      <div className={styles.notesList}>
        <Button onClick={() => startCreatingNote()}>+ Create New Note</Button>
        <div className={styles.notesList__content}>
          {helperText && (
            <div className={styles.notesList__helperText}>{helperText}</div>
          )}

          {emptyText && (
            <div className={styles.notesList__empty}>
              {emptyText}{" "}
              {emptyText.endsWith(", or") && (
                <span onClick={() => startCreatingNote()}>create new note</span>
              )}
            </div>
          )}

          {editorState === "creating" && (
            <div className={styles.notesList__untitledNote}>Untitled Note</div>
          )}

          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
      <OpenNote />
      <div className={styles.actions}>
        <Button
          variant="border"
          onClick={handleArchive}
          className={styles.actions__action}
        >
          {isArchived ? <RestoreIcon /> : <ArchiveIcon />}
          <span>{isArchived ? "Restore Note" : "Archive Note"}</span>
        </Button>
        <Button
          variant="border"
          onClick={handleDelete}
          className={styles.actions__action}
        >
          <DeleteIcon />
          <span>Delete Note</span>
        </Button>
      </div>
      <Dialog />
    </PageLayout>
  );
};

export default Home;
