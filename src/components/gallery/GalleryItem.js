const GalleryItem = ({ slide }) => {
  return (
    <>
      {slide.map((item, index) => {
        return (
          <div
            className="gallery_item"
            key={item.id}
            style={{ gridArea: `galleryItem${item.num}` }}
          >
            {/* <div className='spinloader medium'>
                ACÁ VA EL SPINNER
              </div> */}

            <div className="openi_name">
              <span>{item.title}</span>
            </div>

            <div className="openi_link"></div>

            <div className="openi_bg slideshow-bg">
              <img src={item.img} alt={item.alt} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GalleryItem;
