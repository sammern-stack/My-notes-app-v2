import type { ComponentType, SVGProps } from "react";
import SunIcon from "@/assets/images/icon-sun.svg?react";
import FontIcon from "@/assets/images/icon-font.svg?react";
import type { SettingTab } from "@/shared/stores/useConfigStore";
import { FontSetting } from "@/layout/ActiveSetting/FontSetting";
import { ThemeSetting } from "@/layout/ActiveSetting/ThemeSetting";

export interface SettingListItem {
  tab: SettingTab;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  view: () => React.JSX.Element;
}

export const settingsListConfig: SettingListItem[] = [
  {
    tab: "theme",
    label: "Color Theme",
    icon: SunIcon,
    view: ThemeSetting,
  },
  {
    tab: "font",
    label: "Font Theme",
    icon: FontIcon,
    view: FontSetting,
  },
];
