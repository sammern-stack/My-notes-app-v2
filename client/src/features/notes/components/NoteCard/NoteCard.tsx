// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";
import { formatDate } from "@/utils";
import type { NoteModel } from "@types";
import "./NoteCard.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface NoteCardProps {
  note: NoteModel;
}

// ——— Note Card Component —————————————————————————————————————————————————————————————————————————
export const NoteCard = ({ note }: NoteCardProps) => {
  const { _id, title, tags, createdAt } = note;
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);

  const isNoteActive = _id === selectedNoteId;
  const handleSelect = () => setSelectedNoteId(_id);

  return (
    <>
      <button
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
      </button>

      <div className="notes__list-divider"></div>
    </>
  );
};
