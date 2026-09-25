// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { RenderOption } from "./RenderOption";
import styles from "./RenderOptions.module.scss";

export const RenderOptions = () => {
  return (
    <div className={styles["sidebar__render-options"]}>
      <RenderOption option="all" />
      <RenderOption option="archived" />
    </div>
  );
};
