import styles from "./Button.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { cls } from "@/shared/utils";

import ChevronRightIcon from "@/assets/images/icon-chevron-right.svg?react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "border"
  | "warning"
  | "selectable";

type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  isActive?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  className = "",
  variant = "primary",
  children,
  isActive,
  ...props
}: ButtonProps) => {
  const buttonClasses = cls(
    className,
    styles.button,
    styles[`button--${variant}`],
    variant === "selectable" && isActive && styles["button--active"],
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
      {isActive && <ChevronRightIcon />}
    </button>
  );
};
