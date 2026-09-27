import SunIcon from "@/assets/images/icon-sun.svg?react";
import MoonIcon from "@/assets/images/icon-moon.svg?react";
import SystemThemeIcon from "@/assets/images/icon-system-theme.svg?react";

export const themeOptions = [
  {
    value: "light",
    id: "theme-light",
    label: "Light Mode",
    description: "Pick a clean and classic light theme",
    Icon: SunIcon,
  },
  {
    value: "dark",
    id: "theme-dark",
    label: "Dark Mode",
    description: "Select a sleek and modern dark theme",
    Icon: MoonIcon,
  },
  {
    value: "system",
    id: "theme-system",
    label: "System",
    description: "Adapts to your device's theme",
    Icon: SystemThemeIcon,
  },
] as const;
