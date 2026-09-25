import SearchIcon from "@/assets/images/icon-search.svg?react";
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles["page__search"]}>
      <SearchIcon />
      <input
        type="text"
        className={styles["page__search-input"]}
        placeholder="Search by title, content, or tags…"
      />
    </div>
  );
};
