import styles from "./Settings.module.scss";
import { PageContent, ActiveSetting } from "@/layout";
import { useConfigStore } from "@/shared/stores";
import { settingsListConfig } from "./settings.config";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";

const Settings = () => {
  const settingTab = useConfigStore((s) => s.settingTab);
  const setSettingTab = useConfigStore((s) => s.setSettingTab);

  return (
    <PageContent className="settings">
      <div className={styles.settings}>
        {settingsListConfig.map(({ tab, label, icon: Icon }) => (
          <button
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
      <ActiveSetting />
    </PageContent>
  );
};

export default Settings;
