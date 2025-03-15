import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import { fetchImages } from "../../js/unsplash";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(query) {
    if (query.length === 0) return;
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    async function loadImages() {
      if (searchQuery.length === 0) return;

      setIsLoading(true);
      try {
        const images = fetchImages(searchQuery, page);
        setImages(images);
        console.log(images);
      } catch (error) {
        // Show error here
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadImages();
  }, [searchQuery, page]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {searchQuery.length > 0 && <div>Results for: {searchQuery}</div>}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
