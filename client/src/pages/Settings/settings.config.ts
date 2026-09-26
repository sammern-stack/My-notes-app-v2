import { SettingsViewTheme, SettingsViewFont } from "@/features/settings";
import type { ComponentType, SVGProps } from "react";
import type { ActiveSetting } from "./Settings";

import FontIcon from "@/assets/images/icon-font.svg?react";
import SunIcon from "@/assets/images/icon-sun.svg?react";

export interface Setting {
  tab: ActiveSetting;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  view: () => React.JSX.Element;
}

export const settingsConfig: Setting[] = [
  {
    tab: "theme",
    label: "Color Theme",
    icon: SunIcon,
    view: SettingsViewTheme,
  },
  {
    tab: "font",
    label: "Font Theme",
    icon: FontIcon,
    view: SettingsViewFont,
  },
];
