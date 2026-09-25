import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { RenderOptions } from "@/features/settings";
import { useGetNotes } from "@/features/notes";
import { useFiltersStore } from "@/shared/stores";

import LogoIcon from "@/assets/images/logo.svg?react";
import TagIcon from "@/assets/images/icon-tag.svg?react";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";

export const Sidebar = () => {
  const location = useLocation();
  const { data: notes = [] } = useGetNotes();
  const { addTagFilter, removeTagFilter } = useFiltersStore.getState();
  const tags = [...new Set(notes.flatMap((note) => note.tags))].sort((a, b) =>
    a.localeCompare(b),
  );
  const tagFilters = useFiltersStore((s) => s.tagFilters);

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__logo-wrapper"]}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <div className={styles.sidebar__filters}>
        <RenderOptions />
        <div className={styles.sidebar__divider}></div>
        <div className={styles["sidebar__tags-header"]}>
          <div className={styles["sidebar__tags-title"]}>Tags</div>
        </div>
        <div className={styles.sidebar__tags}>
          {tags.map((tag) => {
            const IsSettingsPage = location.pathname === "/settings";
            const isActive = IsSettingsPage ? false : tagFilters.includes(tag);

            const tagClasses = [
              styles.sidebar__tag,
              isActive && styles["sidebar__tag--active"],
            ].join(" ");

            const handleToggleTag = () => {
              if (IsSettingsPage) return;
              if (tagFilters.includes(tag)) return removeTagFilter(tag);
              return addTagFilter(tag);
            };

            return (
              <button className={tagClasses} onClick={handleToggleTag}>
                <TagIcon /> <p>{tag}</p>
                {isActive && <ChevronRightIcon />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
