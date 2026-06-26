import { PageContent, SettingsList, ActiveSetting } from "@/components/layout";

import "./Settings.scss";

const Settings = () => (
  <PageContent className="settings">
    <SettingsList />
    <ActiveSetting />
  </PageContent>
);

export default Settings;
