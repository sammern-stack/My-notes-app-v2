import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { RenderOptions, TagsList } from "@/features/settings";
import LogoIcon from "@/assets/images/logo.svg?react";

export const Sidebar = () => {
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
        <TagsList />
      </div>
    </div>
  );
};
