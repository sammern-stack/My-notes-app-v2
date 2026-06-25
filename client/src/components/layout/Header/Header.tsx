// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useFiltersStore } from "@/stores";

import { SearchBar } from "@components/features/Filters";
import { Icon } from "@/components/shared";

import "./Header.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Header = () => {
  const pageTitle = useFiltersStore((s) => s.generatePageTitle());

  return (
    <div className="page__header">
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

      <div className="page__header-content">
        <SearchBar />

        <button className="page__settings-toggle">
          <Icon name="icon-settings" />
        </button>
      </div>
    </div>
  );
};
