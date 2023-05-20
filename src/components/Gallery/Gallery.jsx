import React from "react";

const Gallery = () => {
  return (
    <div className="text-center m-8">
      <h1 className="text-4xl font-bold">TOY'S GALLERY</h1>
      <div className="carousel carousel-center rounded-box">
        {/* img 1 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/stuffed-animal-toys-isolated-stock-photography_csp11666303.jpg"
            alt="Pizza"
          />
        </div>
        {/* img 3 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/soft-toys-and-christmas-balls-picture_csp7780791.jpg"
            alt=""
          />
        </div>
        {/* img 3 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/stuffed-animal-toys-isolated-on-white-picture_csp84292213.jpg"
            alt=""
          />
        </div>
        {/* img 4 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/bunny-rabbit-cuddly-toy-stock-photograph_csp0635519.jpg"
            alt=""
          />
        </div>
        {/* img 5 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/toy-rabbit-stock-photography_csp12269209.jpg"
            alt=""
          />
        </div>
        {/* img 6 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/wooden-rolling-cow-toy-isolated-stock-photo_csp4499402.jpg"
            alt=""
          />
        </div>
        {/* img 7 */}
        <div className="carousel-item">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/wooden-rolling-animal-toys-isolated-stock-image_csp4499436.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
