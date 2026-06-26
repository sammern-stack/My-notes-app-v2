// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { MouseEventHandler } from "react";
import { capitalizeStr } from "@utils";
import { Icon } from "./Icon";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface SelectOptionProps {
  className: string;
  isActive: boolean;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  icon: string;
  label: string;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const SelectOption = ({
  className,
  isActive,
  onSelect,
  icon,
  label,
}: SelectOptionProps) => {
  return (
    <button
      className={`${className} ${isActive ? `${className}--active` : ""}`}
      onClick={onSelect}
    >
      <Icon name={icon} width="20" />
      <p>{capitalizeStr(label)}</p>

      {isActive && <Icon name="icon-chevron-right" />}
    </button>
  );
};
