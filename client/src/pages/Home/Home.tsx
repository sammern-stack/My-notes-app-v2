import styles from "./Home.module.scss";
import { NoteAction, NoteCard, useGetNotes } from "@/features/notes";
import { OpenNote, PageLayout } from "@/layout";
import { Dialog } from "@/shared/components";
import { useEditorStore, useFiltersStore } from "@/shared/stores";

const Home = () => {
  const getQuery = useFiltersStore((s) => s.getQuery);
  const { data: notes = [] } = useGetNotes(getQuery());
  const editorState = useEditorStore((s) => s.editorState);
  const helperText = useFiltersStore((s) => s.generateHelperText());
  const emptyStateText = useFiltersStore((s) =>
    s.generateEmptyStateText(notes.length),
  );
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);

  const handleCreateNote = () => startCreatingNote();

  return (
    <PageLayout>
      <div className={styles.notesList}>
        <NoteAction action="create" />

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
        <NoteAction action="archive" />
        <NoteAction action="delete" />
      </div>
      <Dialog />
    </PageLayout>
  );
};

export default Home;
