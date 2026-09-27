import styles from "./Home.module.scss";

import {
  NoteCard,
  OpenNote,
  HelperText,
  EmptyState,
  CreatingNoteCard,
  useBuildNotesQuery,
  useGetNotes,
  useStartCreateNote,
  useSelectFirstNote,
  useEditorStore,
} from "@/features/notes";

import { PageLayout } from "@/layout";
import { Button } from "@/shared/components";
import { useDialogStore } from "@/shared/stores";

import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import RestoreIcon from "@/assets/images/icon-restore.svg?react";
import DeleteIcon from "@/assets/images/icon-delete.svg?react";

const Home = () => {
  useSelectFirstNote();

  const notesQuery = useBuildNotesQuery();
  const { data: notes = [] } = useGetNotes(notesQuery);
  const startCreatingNote = useStartCreateNote();

  const { openDialog } = useDialogStore.getState();
  const { isArchived } = useEditorStore((s) => s.activeNote);

  const handleArchive = () => {
    openDialog(isArchived ? "restoreNote" : "archiveNote");
  };

  const handleDelete = () => openDialog("deleteNote");

  return (
    <PageLayout>
      <div className={styles.notes}>
        <Button onClick={() => startCreatingNote()}>+ Create New Note</Button>
        <div className={styles.notes__content}>
          <HelperText />
          <EmptyState notesLength={notes.length} />
          <CreatingNoteCard />
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
      <OpenNote />
      <div className={styles.notes__actions}>
        <Button
          variant="border"
          onClick={handleArchive}
          className={styles.notes__action}
        >
          {isArchived ? <RestoreIcon /> : <ArchiveIcon />}
          <span>{isArchived ? "Restore Note" : "Archive Note"}</span>
        </Button>
        <Button
          variant="border"
          onClick={handleDelete}
          className={styles.notes__action}
        >
          <DeleteIcon />
          <span>Delete Note</span>
        </Button>
      </div>
    </PageLayout>
  );
};

export default Home;
