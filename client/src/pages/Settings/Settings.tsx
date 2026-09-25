import styles from "./Settings.module.scss";
import { PageLayout } from "@/layout";
import { useConfigStore } from "@/shared/stores";
import { settingsListConfig } from "./settings.config";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";

const Settings = () => {
  const settingTab = useConfigStore((s) => s.settingTab);
  const setSettingTab = useConfigStore((s) => s.setSettingTab);

  const activeSetting = settingsListConfig.find(
    ({ tab }) => tab === settingTab,
  );
  const ActiveView = activeSetting?.view;

  return (
    <PageLayout>
      <div className={styles.settings}>
        {settingsListConfig.map(({ tab, label, icon: Icon }) => (
          <button
            key={tab}
            className={[
              styles.settings__setting,
              settingTab === tab && styles["settings__setting--active"],
            ].join(" ")}
            onClick={() => setSettingTab(tab)}
          >
            <Icon /> <p>{label}</p>
            {settingTab === tab && <ChevronRightIcon />}
          </button>
        ))}
        <div className={styles.settings__divider}></div>
      </div>
      {ActiveView && <ActiveView />}
    </PageLayout>
  );
};

export default Settings;
