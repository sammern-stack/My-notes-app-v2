import styles from "./Settings.module.scss";
import { PageLayout } from "@/layout";
import { settingsConfig } from "./settings.config";
import { useState } from "react";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";

export type ActiveSetting = "theme" | "font";

const Settings = () => {
  const [activeSetting, setActiveSetting] = useState<ActiveSetting>("theme");
  const setActiveSettingTab = (tab: ActiveSetting) => setActiveSetting(tab);
  const isActiveSetting = (setting: ActiveSetting) => activeSetting === setting;

  const ActiveView = settingsConfig.find(({ tab }) =>
    isActiveSetting(tab),
  )?.view;

  return (
    <PageLayout>
      <div className={styles.settings}>
        {settingsConfig.map(({ tab, label, icon: Icon }) => (
          <button
            key={tab}
            className={[
              styles.settings__setting,
              isActiveSetting(tab) && styles["settings__setting--active"],
            ].join(" ")}
            onClick={() => setActiveSettingTab(tab)}
          >
            <Icon /> <p>{label}</p>
            {isActiveSetting(tab) && <ChevronRightIcon />}
          </button>
        ))}
        <div className={styles.settings__divider}></div>
      </div>
      {ActiveView && <ActiveView />}
    </PageLayout>
  );
};

export default Settings;
