import css from "./ImageCard.module.css";

function ImageCard({ image, openImage, index }) {
  return (
    <div className={css.container} onClick={() => openImage(index)}>
      <img
        className={css.thumb}
        src={image.urls["small"]}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
