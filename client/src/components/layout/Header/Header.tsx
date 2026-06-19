import { SearchBar } from "@components/features/Filters";
import { Icon } from "@/components/shared";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="page__header">
      <h1 className="page__title">All Notes</h1>

      <div className="page__header-content">
        <SearchBar />

        <button className="page__settings-toggle">
          <Icon name="icon-settings"/>
        </button>
      </div>
    </div>
  );
};
