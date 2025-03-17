import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { capitalizeFirstLetter } from "../../js/utils";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "#555e",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ImageModal({ image, close }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={close}
      style={customStyles}
      contentLabel={image.description}
    >
      <div onClick={close}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <ImageInfo image={image} />
      </div>
    </Modal>
  );
}

function ImageInfo({ image }) {
  return (
    <>
      <div className={css.description}>
        {capitalizeFirstLetter(image.alt_description)}
      </div>
      <div className={css["gallery-item-info"]}>
        <div className={css.field}>
          <span className={css.label}>Uploaded by</span>
          <span className={css.value}>{image.user.name}</span>
        </div>
        <div className={css.field}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{image.likes}</span>
        </div>
      </div>
    </>
  );
}

export default ImageModal;
