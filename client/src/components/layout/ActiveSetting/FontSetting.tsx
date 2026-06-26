import { useConfigStore } from "@stores";
import { Icon } from "@/components/shared";

export const FontSetting = () => {
  const font = useConfigStore((s) => s.font);
  const setFont = useConfigStore((s) => s.setFont);

  return (
    <div className="setting__panel setting__panel--theme">
      <div className="setting__header">
        <h3 className="setting__title">Font Theme</h3>
        <p className="setting__description">Choose your font theme:</p>
      </div>

      <div className="setting__font-options">
        <label
          htmlFor="font-inter"
          className={`setting__font-label ${font === "inter" ? "setting__font-label--active" : ""}`}
        >
          <div className="setting__font-icon">
            <Icon name="icon-font-sans-serif" />
          </div>

          <div className="setting__font-description">
            <p>Sans-serif</p>
            <p>Clean and modern, easy to read</p>
          </div>

          <input
            type="radio"
            name="font-option"
            id="font-inter"
            className="setting__font-input"
            checked={font === "inter"}
            onChange={() => setFont("inter")}
          />
        </label>

        <label
          htmlFor="font-noto-serif"
          className={`setting__font-label ${font === "noto-serif" ? "setting__font-label--active" : ""}`}
        >
          <div className="setting__font-icon">
            <Icon name="icon-font-serif" />
          </div>

          <div className="setting__font-description">
            <p>Serif</p>
            <p>Classic and elegant for a timeless feel.</p>
          </div>

          <input
            type="radio"
            name="font-option"
            id="font-noto-serif"
            className="setting__font-input"
            checked={font === "noto-serif"}
            onChange={() => setFont("noto-serif")}
          />
        </label>

        <label
          htmlFor="font-source-code-pro"
          className={`setting__font-label ${font === "source-code-pro" ? "setting__font-label--active" : ""}`}
        >
          <div className="setting__font-icon">
            <Icon name="icon-font-monospace" />
          </div>

          <div className="setting__font-description">
            <p>Monospace</p>
            <p>Code-like, great for a technical vibe</p>
          </div>

          <input
            type="radio"
            name="font-option"
            id="font-source-code-pro"
            className="setting__font-input"
            checked={font === "source-code-pro"}
            onChange={() => setFont("source-code-pro")}
          />
        </label>
      </div>
    </div>
  );
};
