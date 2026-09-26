import styles from "./PageLayout.module.scss";
import { Header } from "../Header/Header";
import { Sidebar } from "../";
import type { PropsWithChildren } from "react";

interface PageLayoutProps extends PropsWithChildren {
  className?: string;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const PageLayout = ({
  children,
  header,
  sidebar,
  className,
}: PageLayoutProps) => {
  return (
    <div className={`${styles.layout} ${className ?? ""}`}>
      <header className={styles.layout__header}>{header ?? <Header />}</header>
      <aside className={styles.layout__aside}>{sidebar ?? <Sidebar />}</aside>
      <main className={styles.layout__main}>{children}</main>
    </div>
  );
};
