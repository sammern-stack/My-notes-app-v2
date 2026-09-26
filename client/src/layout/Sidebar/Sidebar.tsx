import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { getSortedTags, useGetNotes } from "@/features/notes";
import { useFiltersStore } from "@/shared/stores";
import { Button } from "@/shared/components";
import { capitalizeStr } from "@/shared/utils";
import type { RenderOption } from "@/shared/stores/useFiltersStore";

import LogoIcon from "@/assets/images/logo.svg?react";
import TagIcon from "@/assets/images/icon-tag.svg?react";
import HomeIcon from "@/assets/images/icon-home.svg?react";
import ArchiveIcon from "@/assets/images/icon-archive.svg?react";

const RenderOptions: RenderOption[] = ["all", "archived"];

export const Sidebar = () => {
  const { data: notes = [] } = useGetNotes();
  const tags = getSortedTags(notes);

  const location = useLocation();
  const IsSettingsPage = location.pathname === "/settings";
  const isOptionActive = (condition: boolean) => !IsSettingsPage && condition;

  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const renderOption = useFiltersStore((s) => s.renderOption);
  const { toggleFilter, setRenderOption } = useFiltersStore.getState();

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__logo-wrapper"]}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <div className={styles.sidebar__filters}>
        <div className={styles.sidebar__renderOptions}>
          {RenderOptions.map((option) => (
            <Button
              variant="selectable"
              isActive={isOptionActive(renderOption === option)}
              onClick={() => !IsSettingsPage && setRenderOption(option)}
            >
              {option === "all" ? <HomeIcon /> : <ArchiveIcon />}
              <p>{`${capitalizeStr(option)} Notes`}</p>
            </Button>
          ))}
        </div>
        <div className={styles.sidebar__divider}></div>
        <div className={styles.sidebar__tagsTitle}>Tags</div>
        <div className={styles.sidebar__tags}>
          {tags.map((tag) => (
            <Button
              variant="selectable"
              isActive={isOptionActive(tagFilters.includes(tag))}
              onClick={() => !IsSettingsPage && toggleFilter(tag)}
            >
              <TagIcon /> <p>{tag}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
