// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useLocation } from "react-router-dom";

import { useFiltersStore } from "@stores";

import { SelectOption } from "@/components/shared";

import "./TagsList.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface TagItemProps {
  tag: string;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const TagItem = ({ tag }: TagItemProps) => {
  const location = useLocation();

  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const addTagFilter = useFiltersStore((s) => s.addTagFilter);
  const removeTagFilter = useFiltersStore((s) => s.removeTagFilter);

  const isSelected = tagFilters.includes(tag);

  const isActive = () =>
    location.pathname === "/settings" ? false : isSelected;

  const handleSelect = () => {
    if (location.pathname === "/settings") return;
    return isSelected ? removeTagFilter(tag) : addTagFilter(tag);
  };

  return (
    <SelectOption
      className="sidebar__tag-item"
      label={tag}
      isActive={isActive()}
      onSelect={handleSelect}
      icon="icon-tag"
    />
  );
};
