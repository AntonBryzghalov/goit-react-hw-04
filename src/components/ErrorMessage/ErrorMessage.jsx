import css from "./ErrorMessage.module.css";

function ErrorMessage({ error }) {
  return <p className={css.error}>{error}</p>;
}

export default ErrorMessage;
