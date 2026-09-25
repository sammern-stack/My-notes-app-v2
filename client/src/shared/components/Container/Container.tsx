interface ContainerProps {
  className: string;
  wrapperClassName: string;
  children: React.ReactNode;
}

export const Container = ({
  className,
  wrapperClassName,
  children,
}: ContainerProps) => (
  <div className={className}>
    <div className={wrapperClassName}>{children}</div>
  </div>
);
