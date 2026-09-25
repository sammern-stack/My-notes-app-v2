// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { ReactNode } from "react";

import { Sidebar, Header } from "../";
import { Dialog } from "@/shared/components";

import styles from "./PageContent.module.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface PageContentProps {
  className: string;
  children: ReactNode;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const PageContent = ({ className, children }: PageContentProps) => (
  <div className={`${styles.page} ${className}`}>
    <Sidebar position="left" />

    <div className={`${styles["page__content"]} ${className}__content`}>
      <Header />

      <div className={`${styles["page__body"]} ${className}__body`}>
        {children}
      </div>
    </div>

    <Dialog />
  </div>
);
