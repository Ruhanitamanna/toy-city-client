import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const AddAToy = () => {
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

  const { user } = useContext(AuthContext);
  const handleAddAToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const sellerName = form.seller.value;
    const subCategory = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.available.value;
    const description = form.description.value;
    const order = {
      sellername: sellerName,
      email,
      img,
      toyName: name,
      category: subCategory,
      price: price,
      rating: rating,
      AvailableQuantity: availableQuantity,
      description: description,
      toy: _id,
    };
    console.log(order);

    fetch("http://localhost:5000/bookedToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    if (data.insertedId) {
      alert("toy added successfully");
    }
  };

  return (
    <div className="p-6">
      <div className="text-center">
        {" "}
        <h1 className="text-4xl font-bold">Add this to your collection</h1>
        <div className="ml-6">
          <img className="w-12 h-14" src={img} alt="" />
        </div>
      </div>
      <form onSubmit={handleAddAToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={subCategory}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              defaultValue={rating}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Toys</span>
            </label>
            <input
              type="text"
              name="available"
              defaultValue={availableQuantity}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-secondary btn-block"
            type="submit"
            value="Add toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
