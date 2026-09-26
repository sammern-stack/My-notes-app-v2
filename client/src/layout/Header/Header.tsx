import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useBuildPageTitle } from "@/shared/hooks";

import SettingsIcon from "@/assets/images/icon-settings.svg?react";
import SearchIcon from "@/assets/images/icon-search.svg?react";

export const Header = () => {
  const location = useLocation();
  const pageTitle = useBuildPageTitle();
  const [titlePrefix, titleSuffix] = pageTitle.split(":");
  const isSettingsPage = location.pathname === "/settings";

  return (
    <div className={styles["page__header"]}>
      <h1 className={styles["page__title"]}>
        {isSettingsPage ? (
          "Settings"
        ) : titleSuffix ? (
          <>
            <span>{titlePrefix}:</span>
            <span>{titleSuffix}</span>
          </>
        ) : (
          pageTitle
        )}
      </h1>

      <div className={styles["page__header-content"]}>
        <div className={styles["page__search"]}>
          <SearchIcon />
          <input
            type="text"
            className={styles["page__search-input"]}
            placeholder="Search by title, content, or tags…"
          />
        </div>

        <Link to="/settings">
          <button className="">
            <SettingsIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};
