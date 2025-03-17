import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader
        color="#000"
        loading={true}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
