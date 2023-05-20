import React from "react";

const UpcomingToys = () => {
  return (
    <div className="mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Upcoming Toys</h1>
      </div>
      <div className="grid md:grid-cols-3 m-auto gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Elephant's</h2>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/elephant-toys-picture_csp1848317.jpg"
              alt=""
            />
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Dolfin </h2>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/dolphine-plush-toy-alone-in-a-studio-stock-illustrations_csp106119757.jpg"
              alt=""
            />
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">Rubber ducks</h2>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/rubber-duck-toys-stock-photo_csp1005214.jpg"
              alt=""
            />

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">Fluffy chickens</h2>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/three-baskets-of-easter-chicks-over-stock-photograph_csp10528891.jpg"
              alt=""
            />
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">Giraffe</h2>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/soft-stuffed-toy-giraffe-isolated-on-stock-image_csp2839896.jpg"
              alt=""
            />
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">Pink monkey</h2>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/toy-or-monkey-soft-toy-on-the-background-stock-photo_csp53603326.jpg"
              alt=""
            />
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingToys;
