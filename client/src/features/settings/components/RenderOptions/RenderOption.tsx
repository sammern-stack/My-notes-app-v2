import { useLocation } from "react-router-dom";

import { useFiltersStore } from "@/shared/stores";

import { SelectOption } from "@/shared/components";
import HomeIcon from "@/assets/images/icon-home.svg?react";
import ArchiveIcon from "@/assets/images/icon-archive.svg?react";

import styles from "./RenderOptions.module.scss";

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
      className={styles["sidebar__render-option"]}
      activeClassName={styles["sidebar__render-option--active"]}
      label={`${option} Notes`}
      isActive={isActive()}
      onSelect={handleSelect}
      icon={option === "all" ? HomeIcon : ArchiveIcon}
    />
  );
};
