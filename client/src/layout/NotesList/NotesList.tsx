// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useFiltersStore } from "@/shared/stores";

import { EmptyListState } from "./EmptyListState";
import { HelperText } from "./HelperText";
import { UntitledNote } from "./UntitledNote";

import { NoteAction, NoteCard, useGetNotes } from "@/features/notes";
import { Container } from "@/shared/components";

import "./NotesList.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const NotesList = () => {
  const getQuery = useFiltersStore((s) => s.getQuery);
  const { data: fetchedNotes = [] } = useGetNotes(getQuery());
  const notes = [...fetchedNotes].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  return (
    <Container className="notes__list">
      <NoteAction action="create" />

      <div className="notes__list-content">
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
