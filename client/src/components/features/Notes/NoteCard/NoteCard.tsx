import { useEditorStore } from "@stores";
import { formatDate } from "@/utils";
import type { NoteModel } from "@types";
import "./NoteCard.scss";

interface NoteCardProps {
  note: NoteModel;
}

export const NoteCard = ({ note }: NoteCardProps) => {
  const { _id, title, tags, createdAt } = note;
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);

  const isNoteActive = _id === selectedNoteId;
  const handleSelect = () => setSelectedNoteId(_id);

  return (
    <>
      <div className="notes__list-divider"></div>

      <div
        className={`notes__card ${isNoteActive ? "notes__card--active" : ""}`}
        onClick={handleSelect}
      >
        <div className="notes__card-title">{title}</div>

        <div className="notes__card-tags">
          {tags.map((tag) => (
            <div className="notes__card-tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>

        <div className="notes__card-createdAt">{formatDate(createdAt)}</div>
      </div>

      <div className="notes__list-divider"></div>
    </>
  );
};
