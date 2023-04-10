import { useRef, useState } from "react";

/*---- Imported components ----*/
import GalleryTitle from "../title/GalleryTitle";
import GalleryItemFinal from "./GalleryItemFinal";
import GalleryArrow from "../gallery/GalleryArrow";

const GalleryFinal = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const grid = useRef();
  const gridRef = grid.current;
  const containerRef = useRef(null);
  const rightArrowRef = useRef(null);
  const cursorRef = useRef(null);
  const cursor = cursorRef.current;
  const [isClicked, setIsClicked] = useState(false);
  const rightMargin = 200;

  const coords = useRef({
    startX: 0,
    lastX: 0,
    maxX: window.innerWidth - rightMargin,
  });

  const onMouseDown = (e) => {
    setIsClicked(true);
    coords.current.startX = e.clientX;
  };

  const onMouseUp = () => {
    if (!isClicked) return;
    setIsClicked(false);
    coords.current.lastX = cursor.offsetLeft;
  };

  const onMouseMove = (e) => {
    if (
      !isClicked ||
      e.clientX - coords.current.startX + coords.current.lastX < 0 ||
      e.clientX - coords.current.startX + coords.current.lastX >
        coords.current.maxX
    )
      return;
    e.preventDefault();
    const nextX = e.clientX - coords.current.startX + coords.current.lastX;
    cursor.style.left = `${nextX}px`;

    gridRef.scrollLeft =
      nextX * (gridRef.scrollWidth / (window.innerWidth + rightMargin));
    setCurrentIndex(nextX);
  };

  // ADAPTAR EL COMPORTAMIENTO DE LAS FLECHAS PARA QUE RECORRAN EL COMPONENTE GRID
  const prevSlide = () => {
    // const isFirstSlide = currentIndex === 0;
    // const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    // cursor.style.right = `${newIndex}px`;
    // gridRef.scrollRight = currentIndex;
    setCurrentIndex();
    console.log(currentIndex);
    // console.log(gridRef);
  };

  const nextSlide = () => {
    // const isLastSlide = currentIndex === slides.length - 1;
    // const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(currentIndex + 400);
    // console.log(rightArrowRef.current.offsetWidth);
    // cursor.style.right = `${nextX}px`;
    // gridRef.scrollRight = nextX;
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

            <div
              className="drag_cursor-container"
              ref={containerRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseUp}
            >
              <div
                ref={cursorRef}
                className="drag_cursor"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
              >
                <div className="dragbg"></div>
                <span className="dragarrow"></span>
              </div>
            </div>

            <GalleryArrow
              moveSlide={prevSlide}
              direction={"prev"}
              index={currentIndex}
            />

            <GalleryArrow
              ref={rightArrowRef}
              moveSlide={nextSlide}
              direction={"next"}
              index={currentIndex}
              length={coords.current.maxX}
            />

            <div className="gallery_grid">
              <div className="grid" ref={grid}>
                <GalleryItemFinal slide={slides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFinal;
