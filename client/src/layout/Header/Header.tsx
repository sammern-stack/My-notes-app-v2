import { PageTitle, LabelWithIcon } from "@/shared/components";
import { SearchBar } from "@/features/settings";
import SettingsIcon from "@/assets/images/icon-settings.svg?react";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className={styles["page__header"]}>
    <PageTitle />

    <div className={styles["page__header-content"]}>
      <SearchBar />

      <Link to="/settings">
        <LabelWithIcon
          as="button"
          className="page__settings-toggle"
          icon={SettingsIcon}
        />
      </Link>
    </div>
  </div>
);
