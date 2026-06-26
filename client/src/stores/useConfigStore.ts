// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";
import { persist } from "zustand/middleware";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type Theme = "light" | "dark" | "system";
type Font = "inter" | "noto-serif" | "source-code-pro";
type SettingTab = "theme" | "font";

interface IConfigStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;

  font: Font;
  setFont: (font: Font) => void;

  settingTab: SettingTab;
  setSettingTab: (tab: SettingTab) => void;
}

export const useConfigStore = create<IConfigStore>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),

      font: "inter",
      setFont: (font) => set({ font }),

      settingTab: "theme",
      setSettingTab: (tab) => set({ settingTab: tab }),
    }),
    {
      name: "config",
      partialize: (s) => ({
        theme: s.theme,
        font: s.font,
      }),
    },
  ),
);
