import { useLocation } from "react-router-dom";

import { useFiltersStore } from "@/shared/stores";

import { SelectOption } from "@/shared/components";
import TagIcon from "@/assets/images/icon-tag.svg?react";

import styles from "./TagsList.module.scss";

interface TagItemProps {
  tag: string;
}

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
      className={styles["sidebar__tag-item"]}
      activeClassName={styles["sidebar__tag-item--active"]}
      label={tag}
      isActive={isActive()}
      onSelect={handleSelect}
      icon={TagIcon}
    />
  );
};
