// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface ContainerProps {
  className: string;
  wrapperClassName: string;
  children: React.ReactNode;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Container = ({
  className,
  wrapperClassName,
  children,
}: ContainerProps) => (
  <div className={className}>
    <div className={wrapperClassName}>{children}</div>
  </div>
);
