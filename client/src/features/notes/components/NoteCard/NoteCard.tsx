import { useEditorStore } from "@/shared/stores";
import { formatDate } from "@/shared/utils";
import type { NoteModel } from "@/shared/types/note.types";
import styles from "./NoteCard.module.scss";

interface NoteCardProps {
  note: NoteModel;
}

export const NoteCard = ({
  note: { _id, title, tags, createdAt },
}: NoteCardProps) => {
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);

  const isNoteActive = _id === selectedNoteId;
  const handleSelect = () => setSelectedNoteId(_id);

  return (
    <>
      <button
        className={`${styles["notes__card"]} ${isNoteActive ? styles["notes__card--active"] : ""}`}
        onClick={handleSelect}
      >
        <div className={styles["notes__card-title"]}>{title}</div>

        <div className={styles["notes__card-tags"]}>
          {tags.map((tag) => (
            <div className={styles["notes__card-tag"]} key={tag}>
              {tag}
            </div>
          ))}
        </div>

        <div className={styles["notes__card-createdAt"]}>
          {formatDate(createdAt)}
        </div>
      </button>

      <div className={styles["notes__list-divider"]}></div>
    </>
  );
};
