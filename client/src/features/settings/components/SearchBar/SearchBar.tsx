import { Icon } from "@/shared/components";
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles["page__search"]}>
      <Icon name="icon-search" />
      <input
        type="text"
        className={styles["page__search-input"]}
        placeholder="Search by title, content, or tags…"
      />
    </div>
  );
};
