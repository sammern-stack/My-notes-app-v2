// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface ContainerProps {
  className: string;
  children: React.ReactNode;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Container = ({ className, children }: ContainerProps) => (
  <div className={className}>
    <div className={`${className}--wrapper`}>{children}</div>
  </div>
);
