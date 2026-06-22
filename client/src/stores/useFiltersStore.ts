// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useNotesStore } from "./useNotesStore";
import type { NotesQuery } from "@types";

// ——— Helpers —————————————————————————————————————————————————————————————————————————————————————
const buildQuery = (render: RenderOption, tags: string[]): NotesQuery => {
  const query: Record<string, unknown> = {};

  query.tags = tags;
  if (render === "archived") query.isArchived = true;

  return query;
};

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type RenderOption = "all" | "archived";

interface FiltersStore {
  renderOption: RenderOption;
  setRenderOption: (option: RenderOption) => void;

  tagFilters: string[];
  addTagFilter: (tag: string) => void;
  removeTagFilter: (tag: string) => void;
  clearTagFilters: () => void;

  // Helpers
  applyFilters: () => void;
}

// ——— Filters Store ———————————————————————————————————————————————————————————————————————————————
export const useFiltersStore = create<FiltersStore>()(
  persist(
    (set, get) => ({
      renderOption: "all",
      setRenderOption: (option) => {
        set({ renderOption: option });
        get().applyFilters();
      },

      tagFilters: [],

      addTagFilter: (tag) => {
        set((s) => ({ tagFilters: [...s.tagFilters, tag] }));
        get().applyFilters();
      },

      removeTagFilter: (tag) => {
        set((s) => ({ tagFilters: s.tagFilters.filter((t) => t !== tag) }));
        get().applyFilters();
      },

      clearTagFilters: () => {
        set({ tagFilters: [] });
        get().applyFilters();
      },

      // Helpers
      applyFilters: () => {
        const { renderOption, tagFilters } = get();
        const query = buildQuery(renderOption, tagFilters);
        useNotesStore.getState().setNotes(query);
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
