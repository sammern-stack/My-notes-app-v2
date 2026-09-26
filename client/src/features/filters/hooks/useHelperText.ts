import { useFiltersStore } from "@/features/filters";
import { useMemo } from "react";

export const useHelperText = () => {
  const tagFilters = useFiltersStore((s) => s.tagFilters);
  const renderOption = useFiltersStore((s) => s.renderOption);

  return useMemo(() => {
    if (renderOption === "all" && tagFilters.length === 0) return null;

    const tags = tagFilters.join(", ");

    const doesShownArchived = renderOption === "archived";
    const hasOneTag = tagFilters.length === 1;
    const isTagsEmpty = tags.length === 0;

    return `All ${doesShownArchived ? "your archived" : ""} notes ${!isTagsEmpty ? `with the "${tags}" ${hasOneTag ? "tag" : "tags"}` : ""} are ${doesShownArchived ? "stored" : "shown"} here. ${doesShownArchived ? "You can restore them or delete them anytime" : ""}`;
  }, [tagFilters, renderOption]);
};
