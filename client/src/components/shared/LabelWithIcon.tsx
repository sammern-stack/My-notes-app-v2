// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { capitalizeStr } from "@utils";
import { Icon } from "./Icon";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type LabelWithIconOwnProps<E extends ElementType = "div"> = {
  as?: E;
  className?: string;
  icon: string;
  label: string;
};

type LabelWithIconProps<E extends ElementType = "div"> =
  LabelWithIconOwnProps<E> &
    Omit<ComponentPropsWithoutRef<E>, keyof LabelWithIconOwnProps>;

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const LabelWithIcon = <E extends ElementType = "div">({
  as,
  className,
  icon,
  label,
  ...rest
}: LabelWithIconProps<E>) => {
  const Component = as ?? "div";

  return (
    <Component className={className} {...rest}>
      <Icon name={icon} />
      <p>{capitalizeStr(label)}</p>
    </Component>
  );
};
