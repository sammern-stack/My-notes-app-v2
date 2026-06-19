import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <div className="page__search">
      <input
        type="text"
        className="page__search-input"
        placeholder="Search by title, content, or tags…"
      />
    </div>
  );
};
