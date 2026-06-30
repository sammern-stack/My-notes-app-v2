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
  getQuery: () => NotesQuery;
  applyFilters: () => void;
  generateHelperText: () => string | null;
  generateEmptyStateText: () => string | null;
  generatePageTitle: () => string;
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
      getQuery: () => {
        const { renderOption, tagFilters } = get();
        return buildQuery(renderOption, tagFilters);
      },

      applyFilters: () => {
        const { renderOption, tagFilters } = get();
        const query = buildQuery(renderOption, tagFilters);
        useNotesStore.getState().setNotes(query);
      },

      generateHelperText: () => {
        const { renderOption, tagFilters } = get();
        if (renderOption === "all" && tagFilters.length === 0) return null;

        const tags = tagFilters.join(", ");

        const doesShownArchived = renderOption === "archived";
        const hasOneTag = tagFilters.length === 1;
        const isTagsEmpty = tags.length === 0;

        return `All ${doesShownArchived ? "your archived" : ""} notes ${!isTagsEmpty ? `with the "${tags}" ${hasOneTag ? "tag" : "tags"}` : ""} are ${doesShownArchived ? "stored" : "shown"} here. ${doesShownArchived ? "You can restore them or delete them anytime" : ""}`;
      },

      generateEmptyStateText: () => {
        const { notes } = useNotesStore.getState();
        if (notes.length !== 0 || get().tagFilters.length !== 0) return null;

        return get().renderOption === "all"
          ? "You don’t have any notes yet. Start a new note to capture your thoughts and ideas."
          : "No notes have been archived yet. Move notes here for safekeeping, or";
      },

      generatePageTitle: () => {
        const { renderOption, tagFilters } = get();

        if (tagFilters.length === 0) {
          return renderOption === "all" ? "All Notes" : "Archived Notes";
        }

        return renderOption === "all"
          ? `Notes Tagged: ${tagFilters.join(", ")}`
          : `Archived Notes Tagged: ${tagFilters.join(", ")}`;
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
