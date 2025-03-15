import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <ClipLoader
      color="#0f0"
      loading={true}
      size={90}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
