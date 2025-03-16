import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.more}>
      <button className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
