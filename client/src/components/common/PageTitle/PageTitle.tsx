// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useLocation } from "react-router-dom";
import { useFiltersStore } from "@/stores";
import "./PageTitle.scss";

export const PageTitle = () => {
  const location = useLocation();
  const pageTitle = useFiltersStore((s) => s.generatePageTitle());

  if (location.pathname === "/settings")
    return <h1 className="page__title">Settings</h1>;

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
