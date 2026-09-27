import styles from "./SettingsView.module.scss";
import { fontOptions } from "@/features/settings/config/fontOptions";
import { useFontStore } from "@/features/settings/stores/fontStore";
import { cls } from "@/shared/utils";

export const SettingsViewFont = () => {
  const font = useFontStore((s) => s.font);
  const setFont = useFontStore((s) => s.setFont);

  return (
    <div className={styles.settingsView}>
      <div className={styles.settingsView__header}>
        <h3 className={styles.settingsView__title}>Font Theme</h3>
        <p className={styles.settingsView__description}>
          Choose your font theme:
        </p>
      </div>

      <div className={styles.settingsView__fontOptions}>
        {fontOptions.map(({ value, id, label, description, Icon }) => (
          <label
            key={value}
            htmlFor={id}
            className={cls(
              styles.settingsView__fontLabel,
              font === value && styles["settingsView__fontLabel--active"],
            )}
          >
            <div className={styles.settingsView__fontIcon}>
              <Icon />
            </div>

            <div className={styles.settingsView__fontDescription}>
              <p>{label}</p>
              <p>{description}</p>
            </div>

            <input
              type="radio"
              name="font-option"
              id={id}
              className={styles.settingsView__fontInput}
              checked={font === value}
              onChange={() => setFont(value)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
