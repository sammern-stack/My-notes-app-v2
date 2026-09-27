import styles from "./Home.module.scss";
import { Fragment } from "react";

import {
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
import { cls, formatDate } from "@/shared/utils";

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
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const isNoteSelected = (id: string) => id === selectedNoteId;

  const handleArchive = () => {
    openDialog(isArchived ? "restoreNote" : "archiveNote");
  };

  const handleDelete = () => openDialog("deleteNote");

  return (
    <PageLayout>
      <section className={styles.notes}>
        <Button onClick={() => startCreatingNote()}>+ Create New Note</Button>
        <div className={styles.notes__content}>
          <HelperText />
          <EmptyState notesLength={notes.length} />
          <CreatingNoteCard />
          {notes.map(({ _id, title, tags, createdAt }) => (
            <Fragment key={_id}>
              <button
                className={cls(
                  styles.notes__card,
                  isNoteSelected(_id) && styles.notes__cardActive,
                )}
                onClick={() => setSelectedNoteId(_id)}
              >
                <h3 className={styles.notes__cardTitle}>{title}</h3>
                <ul className={styles.notes__cardTags}>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <p className={styles.notes__cardCreatedAt}>
                  {formatDate(createdAt)}
                </p>
              </button>
              <hr className={styles.notes__listDivider} />
            </Fragment>
          ))}
        </div>
      </section>
      <OpenNote />
      <section className={styles.notes__actions}>
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
      </section>
    </PageLayout>
  );
};

export default Home;
