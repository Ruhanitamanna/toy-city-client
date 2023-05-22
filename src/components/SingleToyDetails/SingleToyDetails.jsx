import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toy = useLoaderData();

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
  return <div></div>;
};

export default SingleToyDetails;
