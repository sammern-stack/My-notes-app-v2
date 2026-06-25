import { useFiltersStore } from "@/stores";
import "./PageTitle.scss";

export const PageTitle = () => {
  const pageTitle = useFiltersStore((s) => s.generatePageTitle());

  return (
    <h1 className="page__title">
      {pageTitle.includes(":") ? (
        <>
          <span>{pageTitle.split(":")[0]}:</span>
          <span>{pageTitle.split(":")[1]}</span>
        </>
      ) : (
        <div>{pageTitle}</div>
      )}
    </h1>
  );
};
