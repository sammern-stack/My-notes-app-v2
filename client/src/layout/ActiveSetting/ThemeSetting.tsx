import { useConfigStore } from "@/shared/stores";
import { Icon } from "@/shared/components";
import styles from "./ActiveSetting.module.scss";

export const ThemeSetting = () => {
  const theme = useConfigStore((s) => s.theme);
  const setTheme = useConfigStore((s) => s.setTheme);

  return (
    <div
      className={`${styles["setting__panel"]} ${styles["setting__panel--theme"]}`}
    >
      <div className={styles["setting__header"]}>
        <h3 className={styles["setting__title"]}>Color Theme</h3>
        <p className={styles["setting__description"]}>
          Choose your color theme:
        </p>
      </div>

      <div className={styles["setting__theme-options"]}>
        <label
          htmlFor="theme-light"
          className={`${styles["setting__theme-label"]} ${theme === "light" ? styles["setting__theme-label--active"] : ""}`}
        >
          <div className={styles["setting__theme-icon"]}>
            <Icon name="icon-sun" />
          </div>

          <div className={styles["setting__theme-description"]}>
            <p>Light Mode</p>
            <p>Pick a clean and classic light theme</p>
          </div>

          <input
            type="radio"
            name="theme-option"
            id="theme-light"
            className={styles["setting__theme-input"]}
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />
        </label>

        <label
          htmlFor="theme-dark"
          className={`${styles["setting__theme-label"]} ${theme === "dark" ? styles["setting__theme-label--active"] : ""}`}
        >
          <div className={styles["setting__theme-icon"]}>
            <Icon name="icon-moon" />
          </div>

          <div className={styles["setting__theme-description"]}>
            <p>Dark Mode</p>
            <p>Select a sleek and modern dark theme</p>
          </div>

          <input
            type="radio"
            name="theme-option"
            id="theme-dark"
            className={styles["setting__theme-input"]}
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
        </label>

        <label
          htmlFor="theme-system"
          className={`${styles["setting__theme-label"]} ${theme === "system" ? styles["setting__theme-label--active"] : ""}`}
        >
          <div className={styles["setting__theme-icon"]}>
            <Icon name="icon-system-theme" />
          </div>

          <div className={styles["setting__theme-description"]}>
            <p>System</p>
            <p>Adapts to your device's theme</p>
          </div>

          <input
            type="radio"
            name="theme-option"
            id="theme-system"
            className={styles["setting__theme-input"]}
            checked={theme === "system"}
            onChange={() => setTheme("system")}
          />
        </label>
      </div>
    </div>
  );
};
