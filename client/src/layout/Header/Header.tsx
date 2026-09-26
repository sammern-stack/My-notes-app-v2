import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { PageTitle } from "@/shared/components";

import SettingsIcon from "@/assets/images/icon-settings.svg?react";
import SearchIcon from "@/assets/images/icon-search.svg?react";

export const Header = () => (
  <div className={styles["page__header"]}>
    <PageTitle />

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
