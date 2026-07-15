import { useNotesStore } from "@stores";
import { TagItem } from "./TagItem";
import "./TagsList.scss";

export const TagsList = () => {
  const tags = useNotesStore((s) => s.tags);

  return (
    <div className="sidebar__tags-list">
      {[...tags].map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </div>
  );
};
