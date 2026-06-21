import { formatDate } from "@/utils";
import type { NoteModel } from "@types";
import "./NoteCard.scss";

interface NoteCardProps {
  note: NoteModel;
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <>
      <div className="notes__list-divider"></div>

      <div className="notes__card">
        <div className="notes__card-title">{note.title}</div>

        <div className="notes__card-tags">
          {note.tags.map((tag) => (
            <div className="notes__card-tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>

        <div className="notes__card-createdAt">
          {formatDate(note.createdAt)}
        </div>
      </div>

      <div className="notes__list-divider"></div>
    </>
  );
};
