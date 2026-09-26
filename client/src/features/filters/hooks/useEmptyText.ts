import { useFiltersStore } from "@/features/filters";
import { useMemo } from "react";

export const useEmptyText = (notesCount: number) => {
  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const renderOption = useFiltersStore((s) => s.renderOption);

  return useMemo(() => {
    if (notesCount !== 0 || tagFilters.length !== 0) return null;
    return renderOption === "all"
      ? "You don’t have any notes yet. Start a new note to capture your thoughts and ideas."
      : "No notes have been archived yet. Move notes here for safekeeping, or";
  }, [tagFilters, renderOption, notesCount]);
};
