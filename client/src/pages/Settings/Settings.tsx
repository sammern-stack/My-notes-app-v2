import { PageContent, SettingsList, ActiveSetting } from "@/layout";

const Settings = () => (
  <PageContent className="settings">
    <SettingsList />
    <ActiveSetting />
  </PageContent>
);

export default Settings;
