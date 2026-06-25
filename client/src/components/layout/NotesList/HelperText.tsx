import { useFiltersStore } from "@stores";

export const HelperText = () => {
  const helperText = useFiltersStore((s) => s.generateHelperText());

  if (!helperText) return null;

  return <div className="notes__archived-text">{helperText}</div>;
};
