import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SingleToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);

  const { user } = useContext(AuthContext);

  const {
    name,
    _id,
    img,
    price,
    rating,
    seller,
    subCategory,
    availableQuantity,
    description,
  } = toy;

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase">Toy Details</h1>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{user?.email}</p>
          <p>{user?.name}</p>
          <p>{seller}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{subCategory}</p>
          <p>{availableQuantity}</p>
          <p>{description}</p>

          <div className="card-actions justify-end">
            <Link to={`/addatoy/${_id}`}>
              <button className="btn btn-secondary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
