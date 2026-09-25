import { useFiltersStore } from "@/shared/stores";

import { EmptyListState } from "./EmptyListState";
import { HelperText } from "./HelperText";
import { UntitledNote } from "./UntitledNote";

import { NoteAction, NoteCard, useGetNotes } from "@/features/notes";
import { Container } from "@/shared/components";

import styles from "./NotesList.module.scss";

export const NotesList = () => {
  const getQuery = useFiltersStore((s) => s.getQuery);
  const { data: fetchedNotes = [] } = useGetNotes(getQuery());
  const notes = [...fetchedNotes].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  return (
    <Container
      className={styles["notes__list"]}
      wrapperClassName={styles["notes__list--wrapper"]}
    >
      <NoteAction action="create" />

      <div className={styles["notes__list-content"]}>
        <HelperText />

        <EmptyListState notesCount={notes.length} />

        <UntitledNote />

        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </Container>
  );
};
