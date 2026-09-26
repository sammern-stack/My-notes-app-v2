import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "border" | "warning";
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    className,
    styles.button,
    styles[`button--${variant}`],
  ].join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
