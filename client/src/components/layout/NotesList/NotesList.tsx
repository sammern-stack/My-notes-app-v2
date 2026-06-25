// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useNotesStore } from "@stores";

import { EmptyListState } from "./EmptyListState";
import { HelperText } from "./HelperText";
import { UntitledNote } from "./UntitledNote";
import { NoteAction, NoteCard } from "@components/features/Notes";

import "./NotesList.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const NotesList = () => {
  const notes = useNotesStore((s) => s.notes);

  return (
    <div className="notes__list">
      <div className="notes__wrapper">
        <NoteAction action="create" />

        <div className="notes__list-content">
          <HelperText />

          <EmptyListState />

          <UntitledNote />

          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};
