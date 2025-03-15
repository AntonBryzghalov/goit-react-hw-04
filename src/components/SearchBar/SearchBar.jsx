import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event.target.search.value.trim());
  }

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
