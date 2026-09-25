import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  SVGProps,
} from "react";
import { capitalizeStr } from "@/shared/utils";

type BaseProps<E extends ElementType = "div"> = {
  as?: E;
  className?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label?: string;
};

type LabelWithIconProps<E extends ElementType = "div"> = BaseProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof BaseProps>;

export const LabelWithIcon = <E extends ElementType = "div">({
  as,
  className,
  icon,
  label,
  ...rest
}: LabelWithIconProps<E>) => {
  const Component = as ?? "div";
  const IconComponent = icon;

  return (
    <Component className={className} {...rest}>
      <IconComponent />
      {label && <p>{capitalizeStr(label)}</p>}
    </Component>
  );
};
