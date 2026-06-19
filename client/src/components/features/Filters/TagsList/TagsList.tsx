import { TagItem } from "./TagItem";
import "./TagsList.scss";

// Temporary Data
const TAGS = [
  { name: "tag-1", count: 1 },
  { name: "tag-2", count: 5 },
  { name: "tag-3", count: 3 },
  { name: "tag-4", count: 2 },
];

export const TagsList = () => {
  return (
    <div className="sidebar__tags-list">
      {TAGS.map((tag) => (
        <TagItem key={tag.name} tag={tag.name} />
      ))}
    </div>
  );
};
