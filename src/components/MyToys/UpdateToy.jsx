import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    toyName,
    img,
    price,
    rating,
    sellerName,
    category,
    availableQuantity,
    description,
  } = toy;
  console.log(toy);
  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const sellerName = form.seller.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.available.value;
    const description = form.description.value;
    const updatedToy = {
      sellerName: sellerName,
      email,
      img,
      toyName: name,
      category: category,
      price: price,
      rating: rating,
      availableQuantity: availableQuantity,
      description: description,
      toy: _id,
    };
    console.log(updatedToy);

    fetch(`https://toy-city-server.vercel.app/bookedToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Toy updated successfully");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="p-6">
      <div className="text-center">
        {" "}
        <h1 className="text-4xl font-bold">Update This Toy</h1>
      </div>
      <div className="m-2 p-2">
        <img className="mx-auto w-28" src={img} alt="" />
      </div>
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 p-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">toyName</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={toyName}
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
              defaultValue={sellerName}
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
              defaultValue={category}
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
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
