import { useFiltersStore } from "@/features/filters";
import { useMemo } from "react";

export const useBuildPageTitle = () => {
  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const renderOption = useFiltersStore((s) => s.renderOption);

  return useMemo(() => {
    if (tagFilters.length === 0)
      return renderOption === "all" ? "All Notes" : "Archived Notes";

    const normalizeTags = tagFilters.join(", ");

    return renderOption === "all"
      ? `Notes Tagged: ${normalizeTags}`
      : `Archived Notes Tagged: ${normalizeTags}`;
  }, [tagFilters, renderOption]);
};
