/*---- Imported svgs ----*/
import { ReactComponent as LeftArrow } from "../../assets/svg/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/right-arrow.svg";

const GalleryArrow = ({ moveSlide, direction, index, length }) => {
  return (
    <div
      className={`${
        direction === "prev"
          ? "gallery_arrows_prev pagination_arrows"
          : "gallery_arrows_next pagination_arrows"
      } 
          ${direction === "prev" && index === 0 ? "disabled-left" : ""}
          ${
            direction === "next" && index === length
              ? "disabled-right disabled"
              : ""
          }
          `}
      onClick={moveSlide}
    >
      <div>
        <div>{direction === "prev" ? <LeftArrow /> : <RightArrow />}</div>
      </div>
    </div>
  );
};

export default GalleryArrow;
