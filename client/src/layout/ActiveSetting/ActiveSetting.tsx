// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useConfigStore } from "@/shared/stores";

import { ThemeSetting } from "./ThemeSetting";
import { FontSetting } from "./FontSetting";
import { Container } from "@/shared/components";

import styles from "./ActiveSetting.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const ActiveSetting = () => {
  const settingTab = useConfigStore((s) => s.settingTab);

  return (
    <Container
      className={styles.setting}
      wrapperClassName={styles["setting--wrapper"] ?? styles.setting}
    >
      {settingTab === "theme" ? <ThemeSetting /> : <FontSetting />}
    </Container>
  );
};
