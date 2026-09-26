import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Font = "inter" | "noto-serif" | "source-code-pro";

interface FontStore {
  font: Font;
  setFont: (font: Font) => void;
}

export const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      font: "inter",
      setFont: (font) => set({ font }),
    }),
    {
      name: "font-store",
      partialize: (s) => ({ font: s.font }),
    },
  ),
);
