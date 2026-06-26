// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useNotesStore } from "@stores";

import { EmptyListState } from "./EmptyListState";
import { HelperText } from "./HelperText";
import { UntitledNote } from "./UntitledNote";

import { NoteAction, NoteCard } from "@components/features/Notes";
import { Container } from "@components/shared";

import "./NotesList.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const NotesList = () => {
  const notes = useNotesStore((s) => s.notes);

  return (
    <Container className="notes__list">
      <NoteAction action="create" />

      <div className="notes__list-content">
        <HelperText />

        <EmptyListState />

        <UntitledNote />

        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </Container>
  );
};
