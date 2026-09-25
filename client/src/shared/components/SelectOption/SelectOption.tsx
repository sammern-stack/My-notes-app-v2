// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { ComponentType, MouseEventHandler, SVGProps } from "react";
import { capitalizeStr } from "@/shared/utils";
import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface SelectOptionProps {
  className: string;
  activeClassName: string;
  isActive: boolean;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
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
  const IconComponent = icon;

  return (
    <button
      className={`${className} ${isActive ? activeClassName : ""}`}
      onClick={onSelect}
    >
      <IconComponent width="20" />
      <p>{capitalizeStr(label)}</p>

      {isActive && <ChevronRightIcon />}
    </button>
  );
};
