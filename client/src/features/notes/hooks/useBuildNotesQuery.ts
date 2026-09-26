import { useMemo } from "react";
import { useFiltersStore } from "@/features/filters";
import type { NotesQuery } from "@/shared/types";

export const useBuildNotesQuery = (): NotesQuery => {
  const renderOption = useFiltersStore((s) => s.renderOption);
  const tagFilters = useFiltersStore((s) => s.tagFilters);

  return useMemo(
    () => ({
      tags: tagFilters,
      ...(renderOption === "archived" && { isArchived: true }),
    }),
    [renderOption, tagFilters],
  );
};
