import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { getSortedTags, useGetNotes } from "@/features/notes";
import { useFiltersStore } from "@/shared/stores";

import LogoIcon from "@/assets/images/logo.svg?react";
import TagIcon from "@/assets/images/icon-tag.svg?react";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";
import HomeIcon from "@/assets/images/icon-home.svg?react";
import ArchiveIcon from "@/assets/images/icon-archive.svg?react";
import { capitalizeStr } from "@/shared/utils";
import type { RenderOption } from "@/shared/stores/useFiltersStore";
import { Button } from "@/shared/components";

const RenderOptions: RenderOption[] = ["all", "archived"];

export const Sidebar = () => {
  const location = useLocation();
  const IsSettingsPage = location.pathname === "/settings";
  const { data: notes = [] } = useGetNotes();
  const { toggleFilter, setRenderOption } = useFiltersStore.getState();
  const tags = getSortedTags(notes);
  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const renderOption = useFiltersStore((s) => s.renderOption);

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__logo-wrapper"]}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <div className={styles.sidebar__filters}>
        <div className={styles.sidebar__renderOptions}>
          {RenderOptions.map((option) => {
            const isActive = IsSettingsPage ? false : renderOption === option;
            const handleClick = () =>
              IsSettingsPage ? null : setRenderOption(option);

            return (
              <Button
                variant="selectable"
                isActive={isActive}
                onClick={handleClick}
              >
                {option === "all" ? <HomeIcon /> : <ArchiveIcon />}
                <p>{`${capitalizeStr(option)} Notes`}</p>
                {isActive && <ChevronRightIcon />}
              </Button>
            );
          })}
        </div>
        <div className={styles.sidebar__divider}></div>
        <div className={styles.sidebar__tagsTitle}>Tags</div>
        <div className={styles.sidebar__tags}>
          {tags.map((tag) => {
            const isActive = IsSettingsPage ? false : tagFilters.includes(tag);
            const handleClick = () =>
              IsSettingsPage ? null : toggleFilter(tag);

            return (
              <Button
                variant="selectable"
                isActive={isActive}
                onClick={handleClick}
              >
                <TagIcon /> <p>{tag}</p>
                {isActive && <ChevronRightIcon />}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
