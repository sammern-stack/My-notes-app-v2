import { useConfigStore } from "@stores";
import { Icon } from "@/components/shared";

export const ThemeSetting = () => {
  const theme = useConfigStore((s) => s.theme);
  const setTheme = useConfigStore((s) => s.setTheme);

  return (
    <div className="setting__panel setting__panel--theme">
      <div className="setting__header">
        <h3 className="setting__title">Color Theme</h3>
        <p className="setting__description">Choose your color theme:</p>
      </div>

      <div className="setting__theme-options">
        <label
          htmlFor="theme-light"
          className={`setting__theme-label ${theme === "light" ? "setting__theme-label--active" : ""}`}
        >
          <div className="setting__theme-icon">
            <Icon name="icon-sun" />
          </div>

          <div className="setting__theme-description">
            <p>Light Mode</p>
            <p>Pick a clean and classic light theme</p>
          </div>

          <input
            type="radio"
            name="theme-option"
            id="theme-light"
            className="setting__theme-input"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />
        </label>

        <label
          htmlFor="theme-dark"
          className={`setting__theme-label ${theme === "dark" ? "setting__theme-label--active" : ""}`}
        >
          <div className="setting__theme-icon">
            <Icon name="icon-moon" />
          </div>

          <div className="setting__theme-description">
            <p>Dark Mode</p>
            <p>Select a sleek and modern dark theme</p>
          </div>

          <input
            type="radio"
            name="theme-option"
            id="theme-dark"
            className="setting__theme-input"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
        </label>

        <label
          htmlFor="theme-system"
          className={`setting__theme-label ${theme === "system" ? "setting__theme-label--active" : ""}`}
        >
          <div className="setting__theme-icon">
            <Icon name="icon-system-theme" />
          </div>

          <div className="setting__theme-description">
            <p>System</p>
            <p>Adapts to your device's theme</p>
          </div>

          <input
            type="radio"
            name="theme-option"
            id="theme-system"
            className="setting__theme-input"
            checked={theme === "system"}
            onChange={() => setTheme("system")}
          />
        </label>
      </div>
    </div>
  );
};
