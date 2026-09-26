import styles from "./Button.module.scss";
import type { ComponentPropsWithoutRef } from "react";

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
  const buttonClasses = [
    className,
    styles.button,
    styles[`button--${variant}`],
    variant === "selectable" && isActive ? styles["button--active"] : "",
  ].join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
      {isActive && <ChevronRightIcon />}
    </button>
  );
};
