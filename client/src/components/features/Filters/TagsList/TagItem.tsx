// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useFiltersStore } from "@stores";
import { capitalizeStr } from "@/utils";
import { Icon } from "@/components/shared";
import "./TagsList.scss";

interface TagItemProps {
  tag: string;
}

export const TagItem = ({ tag }: TagItemProps) => {
  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const addTagFilter = useFiltersStore((s) => s.addTagFilter);
  const removeTagFilter = useFiltersStore((s) => s.removeTagFilter);

  const isSelected = tagFilters.includes(tag);
  const handleSelect = () =>
    isSelected ? removeTagFilter(tag) : addTagFilter(tag);

  return (
    <button
      className={`sidebar__tag-item ${isSelected ? "sidebar__tag-item--active" : ""}`}
      onClick={handleSelect}
    >
      <Icon name="icon-tag" width="20"/>
      <p>{capitalizeStr(tag)}</p>

      {isSelected && <Icon name="icon-chevron-right" />}
    </button>
  );
};
