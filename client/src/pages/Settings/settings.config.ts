import type { ComponentType, SVGProps } from "react";
import SunIcon from "@/assets/images/icon-sun.svg?react";
import FontIcon from "@/assets/images/icon-font.svg?react";
import type { SettingTab } from "@/shared/stores/useConfigStore";

export interface SettingListItem {
  tab: SettingTab;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const settingsListConfig: SettingListItem[] = [
  {
    tab: "theme",
    label: "Color Theme",
    icon: SunIcon,
  },
  {
    tab: "font",
    label: "Font Theme",
    icon: FontIcon,
  },
];
