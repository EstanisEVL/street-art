import { useState } from "react";

/*---- Imported components ----*/
import GalleryTitle from "../title/GalleryTitle";
import GalleryItemAlt from "./GalleryItemAlt";
import GalleryArrow from "../gallery/GalleryArrow";
import GalleryHandle from "./GalleryHandle";

const GalleryAlt = ({ slides }) => {
  const loading = true;
  const [visible, setVisible] = useState(8);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 8 : currentIndex - 8;
    const newVisible = isFirstSlide ? slides.length : currentIndex;
    setCurrentIndex(newIndex);
    setVisible(newVisible);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 8;
    const newIndex = isLastSlide ? 0 : currentIndex + 8;
    setCurrentIndex(newIndex);
    const newVisible = isLastSlide ? 8 : newIndex + 8;
    setVisible(newVisible);
  };

  return (
    <div className="galleries">
      <GalleryTitle />

      <div className="resizable-part">
        {loading || (
          <div className="error_message">
            Something bad happened. Please retry later.
          </div>
        )}

        <div className="innercontent-part">
          <div className="opengalleryct">
            <div className="drag_track"></div>

            <GalleryHandle />

            <GalleryArrow
              moveSlide={prevSlide}
              direction={"prev"}
              index={currentIndex}
            />

            <GalleryArrow
              moveSlide={nextSlide}
              direction={"next"}
              index={currentIndex}
              length={slides.length}
            />

            <div className="gallery_grid">
              <div className="grid">
                <GalleryItemAlt
                  slide={slides}
                  index={currentIndex}
                  visible={visible}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAlt;
