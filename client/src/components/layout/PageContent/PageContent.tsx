import { Sidebar, Header } from "@components/layout";
import "./PageContent.scss";

interface PageContentProps {
  className: string;
  children: React.ReactNode;
}

export const PageContent = ({ className, children }: PageContentProps) => {
  return (
    <div className={`page page--${className} ${className}`}>
      <Sidebar position="left" />

      <div className={`page__content ${className}__content`}>
        <Header />

        <div className={`page__body ${className}__body`}>{children}</div>
      </div>
    </div>
  );
};
