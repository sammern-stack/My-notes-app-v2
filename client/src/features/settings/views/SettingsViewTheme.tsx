import styles from "./SettingsView.module.scss";
import { useThemeStore } from "@/features/settings";
import { themeOptions } from "@/features/settings/config/themeOptions";

export const SettingsViewTheme = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <div className={styles.settingsView}>
      <div className={styles.settingsView__header}>
        <h3 className={styles.settingsView__title}>Color Theme</h3>
        <p className={styles.settingsView__description}>
          Choose your color theme:
        </p>
      </div>

      <div className={styles.settingsView__themeOptions}>
        {themeOptions.map(({ value, id, label, description, Icon }) => (
          <label
            key={value}
            htmlFor={id}
            className={`${styles.settingsView__themeLabel} ${theme === value ? styles["settingsView__themeLabel--active"] : ""}`}
          >
            <div className={styles.settingsView__themeIcon}>
              <Icon />
            </div>

            <div className={styles.settingsView__themeDescription}>
              <p>{label}</p>
              <p>{description}</p>
            </div>

            <input
              type="radio"
              name="theme-option"
              id={id}
              className={styles.settingsView__themeInput}
              checked={theme === value}
              onChange={() => setTheme(value)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
