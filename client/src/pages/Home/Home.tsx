import styles from "./Home.module.scss";
import { NoteCard, useGetNotes } from "@/features/notes";
import { OpenNote, PageLayout } from "@/layout";
import { Button, Dialog } from "@/shared/components";
import {
  useDialogStore,
  useEditorStore,
  useFiltersStore,
} from "@/shared/stores";

import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";
import DeleteIcon from "@/assets/images/icon-delete.svg?react";

const Home = () => {
  const getQuery = useFiltersStore((s) => s.getQuery);
  const { data: notes = [] } = useGetNotes(getQuery());
  const editorState = useEditorStore((s) => s.editorState);
  const helperText = useFiltersStore((s) => s.generateHelperText());
  const emptyStateText = useFiltersStore((s) =>
    s.generateEmptyStateText(notes.length),
  );
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);
  const { openDialog } = useDialogStore.getState();
  const { isArchived } = useEditorStore((s) => s.activeNote);

  const handleCreateNote = () => startCreatingNote();

  const handleArchive = () => {
    openDialog(isArchived ? "restoreNote" : "archiveNote");
  };

  const handleDelete = () => openDialog("deleteNote");

  return (
    <PageLayout>
      <div className={styles.notesList}>
        <Button onClick={handleCreateNote}>+ Create New Note</Button>
        <div className={styles.notesList__content}>
          {helperText && (
            <div className={styles.notesList__helperText}>{helperText}</div>
          )}

          {emptyStateText && (
            <div className={styles.notesList__empty}>
              {emptyStateText}{" "}
              {emptyStateText.endsWith(", or") && (
                <span onClick={handleCreateNote}>create new note</span>
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
