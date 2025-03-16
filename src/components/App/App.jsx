import { useEffect, useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import { fetchImages } from "../../js/unsplash";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const totalPagesRef = useRef(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(-1);

  function onSubmit(query) {
    if (query.length === 0) return;
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    totalPagesRef.current = 0;
  }

  const loadMore = () => setPage((currentPage) => currentPage + 1);
  const openImage = (index) => setImageIndex(index);
  const closeImage = () => setImageIndex(-1);

  useEffect(() => {
    async function loadImages() {
      if (searchQuery.length === 0) return;

      setIsLoading(true);
      try {
        const response = await fetchImages(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...response.results]);
        totalPagesRef.current = response.total_pages;
        //console.log(response);
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
      {totalPagesRef.current > 0 && (
        <ImageGallery images={images} openImage={openImage} />
      )}
      {isLoading && <Loader />}
      {!isLoading && totalPagesRef.current > page && (
        <LoadMoreBtn onClick={loadMore} />
      )}

      {imageIndex >= 0 && (
        <ImageModal image={images[imageIndex]} close={closeImage} />
      )}
    </>
  );
}

export default App;
