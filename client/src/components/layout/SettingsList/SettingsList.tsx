import { useConfigStore } from "@stores";
import { Container, SelectOption } from "@components/shared";
import "./SettingsList.scss";

export const SettingsList = () => {
  const settingTab = useConfigStore((s) => s.settingTab);
  const setSettingTab = useConfigStore((s) => s.setSettingTab);

  return (
    <Container className="settings__list">
      <SelectOption
        className="settings__item"
        isActive={settingTab === "theme"}
        label="Color Theme"
        icon="icon-sun"
        onSelect={() => setSettingTab("theme")}
      />

      <SelectOption
        className="settings__item"
        isActive={settingTab === "font"}
        label="Font Theme"
        icon="icon-font"
        onSelect={() => setSettingTab("font")}
      />

      <div className="settings__divider"></div>
    </Container>
  );
};
