import { useConfigStore } from "@/shared/stores";
import { Container, SelectOption } from "@/shared/components";
import SunIcon from "@/assets/images/icon-sun.svg?react";
import FontIcon from "@/assets/images/icon-font.svg?react";
import styles from "./SettingsList.module.scss";

export const SettingsList = () => {
  const settingTab = useConfigStore((s) => s.settingTab);
  const setSettingTab = useConfigStore((s) => s.setSettingTab);

  return (
    <Container
      className={styles["settings__list"]}
      wrapperClassName={styles["settings__list--wrapper"]}
    >
      <SelectOption
        className={styles["settings__item"]}
        activeClassName={styles["settings__item--active"]}
        isActive={settingTab === "theme"}
        label="Color Theme"
        icon={SunIcon}
        onSelect={() => setSettingTab("theme")}
      />

      <SelectOption
        className={styles["settings__item"]}
        activeClassName={styles["settings__item--active"]}
        isActive={settingTab === "font"}
        label="Font Theme"
        icon={FontIcon}
        onSelect={() => setSettingTab("font")}
      />

      <div className={styles["settings__divider"]}></div>
    </Container>
  );
};
