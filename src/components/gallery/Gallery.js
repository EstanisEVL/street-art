import { useState } from "react";

/*---- Imported components ----*/
import GalleryTitle from "../title/GalleryTitle";
import GalleryItem from "./GalleryItem";
import GalleryArrow from "./GalleryArrow";

const Gallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="galleries">
      <GalleryTitle />

      <div className="resizable-part">
        <div className="error_message">
          Something bad happened. Please retry later.
        </div>

        <div className="innercontent-part">
          <div className="opengalleryct">
            <div className="drag_track"></div>

            <div className="drag_cursor"></div>

            <GalleryArrow moveSlide={prevSlide} direction={"prev"} />
            <GalleryArrow moveSlide={nextSlide} direction={"next"} />

            <div className="gallery_grid">
              <div className="grid">
                <GalleryItem slide={slides[currentIndex]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
