// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { MouseEventHandler } from "react";
import { capitalizeStr } from "@/shared/utils";
import { Icon } from "../Icon/Icon";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface SelectOptionProps {
  className: string;
  activeClassName: string;
  isActive: boolean;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  icon: string;
  label: string;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const SelectOption = ({
  className,
  activeClassName,
  isActive,
  onSelect,
  icon,
  label,
}: SelectOptionProps) => {
  return (
    <button
      className={`${className} ${isActive ? activeClassName : ""}`}
      onClick={onSelect}
    >
      <Icon name={icon} width="20" />
      <p>{capitalizeStr(label)}</p>

      {isActive && <Icon name="icon-chevron-right" />}
    </button>
  );
};
