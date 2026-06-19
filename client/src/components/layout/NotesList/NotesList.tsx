import { NoteCard } from "@components/features/Notes";
import "./NotesList.scss";

// Temporary Data
const NOTES = [
  {
    title: "Note Title 1",
    tags: ["tag-1", "tag-2"],
    createdAt: new Date(Date.now()),
  },
  {
    title: "Note Title 2",
    tags: ["tag-1", "tag-2"],
    createdAt: new Date(Date.now()),
  },
  {
    title: "Note Title 3",
    tags: ["tag-1", "tag-2"],
    createdAt: new Date(Date.now()),
  },
];

export const NotesList = () => {
  return (
    <div className="notes__list">
      <button className="notes__create-btn">+ Create New Note</button>

      <div className="notes__list-content">
        {NOTES.map((note) => (
          <NoteCard key={note.title} note={note} />
        ))}
      </div>
    </div>
  );
};
