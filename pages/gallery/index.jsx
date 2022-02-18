import SingleImage from "../../components/SingleImage";

const Gallery = () => {
  return (
    <section className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-2">
      <SingleImage />
    </section>
  );
};

export default Gallery;
