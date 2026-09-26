import { create } from "zustand";
import { persist } from "zustand/middleware";


export type RenderOption = "all" | "archived";

interface FiltersStore {
  renderOption: RenderOption;
  setRenderOption: (option: RenderOption) => void;

  tagFilters: string[];
  addTagFilter: (tag: string) => void;
  removeTagFilter: (tag: string) => void;
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

      addTagFilter: (tag) => {
        set((s) => ({ tagFilters: [...s.tagFilters, tag] }));
      },

      removeTagFilter: (tag) => {
        set((s) => ({ tagFilters: s.tagFilters.filter((t) => t !== tag) }));
      },

      clearTagFilters: () => {
        set({ tagFilters: [] });
      },
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
