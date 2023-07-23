import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ bookedToy, handleDelete, handleUpdate }) => {
  const {
    sellername,
    email,
    img,
    toyName,
    category,
    rating,
    AvailableQuantity,
    description,
    _id,
    status,
  } = bookedToy;

  return (
    <tr>
      <th>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>

      <td>{toyName}</td>
      <td>{category}</td>
      <td>{rating}</td>
      <td>{AvailableQuantity}</td>
      <td>{description.slice(0, 20)}</td>

      <th>
        {status === "confirm" ? (
          <span className="tex-bold">Confirmed</span>
        ) : (
          <Link to={`/updateToy/${_id}`}>
            <button
              // onClick={() => handleUpdate(_id)}
              className="btn btn-ghost btn-xs"
            >
              Edit
            </button>
          </Link>
          // <button
          //   onClick={() => handleConfirm(_id)}
          //   className="btn btn-ghost btn-xs"
          // >
          //   Buy Now
          // </button>
        )}
      </th>
    </tr>
  );
};

export default MyToysRow;
