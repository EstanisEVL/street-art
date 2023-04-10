import { useRef, useState } from "react";

const GalleryHandle = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursor = cursorRef.current;
  const [isClicked, setIsClicked] = useState(false);

  const coords = useRef({
    startX: 0,
    lastX: 0,
    maxX: window.innerWidth - window.innerWidth * 0.135,
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
    // ref.scrollLeft = e.pageX;
  };

  return (
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
  );
};

export default GalleryHandle;
