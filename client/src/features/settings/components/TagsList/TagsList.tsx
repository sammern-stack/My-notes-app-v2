import { useGetNotes } from "@/features/notes";
import { TagItem } from "./TagItem";
import styles from "./TagsList.module.scss";

export const TagsList = () => {
  const { data: notes = [] } = useGetNotes();
  const tags = [...new Set(notes.flatMap((note) => note.tags))].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className={styles["sidebar__tags-list"]}>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </div>
  );
};
