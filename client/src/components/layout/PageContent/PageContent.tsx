// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import type { ReactNode } from "react";

import { Sidebar, Header } from "@components/layout";
import { Dialog } from "@components/common";

import "./PageContent.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface PageContentProps {
  className: string;
  children: ReactNode;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const PageContent = ({ className, children }: PageContentProps) => (
  <div className={`page page--${className} ${className}`}>
    <Sidebar position="left" />

    <div className={`page__content ${className}__content`}>
      <Header />

      <div className={`page__body ${className}__body`}>{children}</div>
    </div>

    <Dialog />
  </div>
);
