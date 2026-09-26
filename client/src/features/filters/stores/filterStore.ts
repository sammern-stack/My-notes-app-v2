import { create } from "zustand";
import { persist } from "zustand/middleware";

export type RenderOption = "all" | "archived";

interface FiltersStore {
  renderOption: RenderOption;
  setRenderOption: (option: RenderOption) => void;

  tagFilters: string[];
  toggleFilter: (tag: string) => void;
  clearTagFilters: () => void;
}

export const useFiltersStore = create<FiltersStore>()(
  persist(
    (set) => ({
      renderOption: "all",
      setRenderOption: (option) => {
        set({ renderOption: option });
      },

      tagFilters: [],
      toggleFilter: (tag) => {
        set((s) => ({
          tagFilters: s.tagFilters.includes(tag)
            ? s.tagFilters.filter((t) => t !== tag)
            : [...s.tagFilters, tag],
        }));
      },
      clearTagFilters: () => set({ tagFilters: [] }),
    }),
    {
      name: "filters",
      partialize: (s) => ({
        renderOption: s.renderOption,
        tagFilters: s.tagFilters,
      }),
    },
  ),
);
