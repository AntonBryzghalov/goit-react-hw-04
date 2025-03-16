import css from "./ImageCard.module.css";

function ImageCard({ image }) {
  return (
    <div className={css.container}>
      <img
        className={css.thumb}
        src={image.urls["small"]}
        alt={image.description}
      />
    </div>
  );
}

export default ImageCard;
