// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useConfigStore } from "@/shared/stores";

import { ThemeSetting } from "./ThemeSetting";
import { FontSetting } from "./FontSetting";
import { Container } from "@/shared/components";

import "./ActiveSetting.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const ActiveSetting = () => {
  const settingTab = useConfigStore((s) => s.settingTab);

  return (
    <Container className="setting">
      {settingTab === "theme" ? <ThemeSetting /> : <FontSetting />}
    </Container>
  );
};
