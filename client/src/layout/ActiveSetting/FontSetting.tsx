import { useConfigStore } from "@/shared/stores";
import { Icon } from "@/shared/components";
import styles from "./ActiveSetting.module.scss";

export const FontSetting = () => {
  const font = useConfigStore((s) => s.font);
  const setFont = useConfigStore((s) => s.setFont);

  return (
    <div
      className={`${styles["setting__panel"]} ${styles["setting__panel--theme"]}`}
    >
      <div className={styles["setting__header"]}>
        <h3 className={styles["setting__title"]}>Font Theme</h3>
        <p className={styles["setting__description"]}>
          Choose your font theme:
        </p>
      </div>

      <div className={styles["setting__font-options"]}>
        <label
          htmlFor="font-inter"
          className={`${styles["setting__font-label"]} ${font === "inter" ? styles["setting__font-label--active"] : ""}`}
        >
          <div className={styles["setting__font-icon"]}>
            <Icon name="icon-font-sans-serif" />
          </div>

          <div className={styles["setting__font-description"]}>
            <p>Sans-serif</p>
            <p>Clean and modern, easy to read</p>
          </div>

          <input
            type="radio"
            name="font-option"
            id="font-inter"
            className={styles["setting__font-input"]}
            checked={font === "inter"}
            onChange={() => setFont("inter")}
          />
        </label>

        <label
          htmlFor="font-noto-serif"
          className={`${styles["setting__font-label"]} ${font === "noto-serif" ? styles["setting__font-label--active"] : ""}`}
        >
          <div className={styles["setting__font-icon"]}>
            <Icon name="icon-font-serif" />
          </div>

          <div className={styles["setting__font-description"]}>
            <p>Serif</p>
            <p>Classic and elegant for a timeless feel.</p>
          </div>

          <input
            type="radio"
            name="font-option"
            id="font-noto-serif"
            className={styles["setting__font-input"]}
            checked={font === "noto-serif"}
            onChange={() => setFont("noto-serif")}
          />
        </label>

        <label
          htmlFor="font-source-code-pro"
          className={`${styles["setting__font-label"]} ${font === "source-code-pro" ? styles["setting__font-label--active"] : ""}`}
        >
          <div className={styles["setting__font-icon"]}>
            <Icon name="icon-font-monospace" />
          </div>

          <div className={styles["setting__font-description"]}>
            <p>Monospace</p>
            <p>Code-like, great for a technical vibe</p>
          </div>

          <input
            type="radio"
            name="font-option"
            id="font-source-code-pro"
            className={styles["setting__font-input"]}
            checked={font === "source-code-pro"}
            onChange={() => setFont("source-code-pro")}
          />
        </label>
      </div>
    </div>
  );
};
