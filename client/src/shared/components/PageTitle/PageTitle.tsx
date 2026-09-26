import styles from "./PageTitle.module.scss";
import { useLocation } from "react-router-dom";
import { useBuildPageTitle } from "@/shared/hooks";

export const PageTitle = () => {
  const location = useLocation();
  const pageTitle = useBuildPageTitle();

  if (location.pathname === "/settings")
    return <h1 className={styles["page__title"]}>Settings</h1>;

  return (
    <h1 className={styles["page__title"]}>
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
