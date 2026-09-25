import { useConfigStore } from "@/shared/stores";

import { ThemeSetting } from "./ThemeSetting";
import { FontSetting } from "./FontSetting";

import styles from "./ActiveSetting.module.scss";

export const ActiveSetting = () => {
  const settingTab = useConfigStore((s) => s.settingTab);

  return (
    <div className={styles.setting}>
      {settingTab === "theme" ? <ThemeSetting /> : <FontSetting />}
    </div>
  );
};
