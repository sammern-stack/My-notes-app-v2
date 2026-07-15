// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useLocation } from "react-router-dom";

import { useFiltersStore } from "@stores";

import { SelectOption } from "@/components/shared";

import "./RenderOptions.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface RenderOptionProps {
  option: "all" | "archived";
}

export const RenderOption = ({ option }: RenderOptionProps) => {
  const location = useLocation();

  const renderOption = useFiltersStore((s) => s.renderOption);
  const setRenderOption = useFiltersStore((s) => s.setRenderOption);

  const isActive = () =>
    location.pathname === "/settings" ? false : renderOption === option;

  const handleSelect = () => {
    if (location.pathname === "/settings") return;
    setRenderOption(option);
  };

  return (
    <SelectOption
      className="sidebar__render-option"
      label={`${option} Notes`}
      isActive={isActive()}
      onSelect={handleSelect}
      icon={option === "all" ? "icon-home" : "icon-archive"}
    />
  );
};
