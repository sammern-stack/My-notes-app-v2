import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useGetNotes } from "@/features/notes";
import { useFiltersStore } from "@/shared/stores";

import LogoIcon from "@/assets/images/logo.svg?react";
import TagIcon from "@/assets/images/icon-tag.svg?react";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";
import HomeIcon from "@/assets/images/icon-home.svg?react";
import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import { capitalizeStr } from "@/shared/utils";
import type { RenderOption } from "@/shared/stores/useFiltersStore";

const RenderOptions: RenderOption[] = ["all", "archived"];

export const Sidebar = () => {
  const location = useLocation();
  const IsSettingsPage = location.pathname === "/settings";
  const { data: notes = [] } = useGetNotes();
  const { addTagFilter, removeTagFilter } = useFiltersStore.getState();
  const tags = [...new Set(notes.flatMap((note) => note.tags))].sort((a, b) =>
    a.localeCompare(b),
  );
  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const renderOption = useFiltersStore((s) => s.renderOption);
  const setRenderOption = useFiltersStore((s) => s.setRenderOption);

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__logo-wrapper"]}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <div className={styles.sidebar__filters}>
        <div className={styles["sidebar__render-options"]}>
          {RenderOptions.map((option) => {
            const isActive = IsSettingsPage ? false : renderOption === option;

            const buttonClasses = [
              styles.sidebar__renderOption,
              isActive && styles["sidebar__renderOption--active"],
            ].join(" ");

            const handleClick = () => {
              if (IsSettingsPage) return;
              setRenderOption(option);
            };

            return (
              <button className={buttonClasses} onClick={handleClick}>
                {option === "all" ? <HomeIcon /> : <ArchiveIcon />}
                <p>{`${capitalizeStr(option)} Notes`}</p>
              </button>
            );
          })}
        </div>
        <div className={styles.sidebar__divider}></div>
        <div className={styles.sidebar__tagsTitle}>Tags</div>
        <div className={styles.sidebar__tags}>
          {tags.map((tag) => {
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
