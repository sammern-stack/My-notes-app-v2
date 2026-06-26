// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useFiltersStore } from "@stores";

import { SelectOption } from "@/components/shared";

import "./RenderOptions.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface RenderOptionProps {
  option: "all" | "archived";
}

export const RenderOption = ({ option }: RenderOptionProps) => {
  const renderOption = useFiltersStore((s) => s.renderOption);
  const setRenderOption = useFiltersStore((s) => s.setRenderOption);

  return (
    <SelectOption
      className="sidebar__render-option"
      label={`${option} Notes`}
      isActive={renderOption === option}
      onSelect={() => setRenderOption(option)}
      icon={option === "all" ? "icon-home" : "icon-archive"}
    />
  );
};
