import { NoteCard } from "@components/features/Notes";
import "./NotesList.scss";
import { useNotesStore } from "@stores";

export const NotesList = () => {
  const notes = useNotesStore((s) => s.notes);

  return (
    <div className="notes__list">
      <button className="notes__create-btn">+ Create New Note</button>

      <div className="notes__list-content">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};
