function ImageCard({ image }) {
  return (
    <div>
      <img src={image.urls["thumb"]} alt={image.description} />
    </div>
  );
}

export default ImageCard;
