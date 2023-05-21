import React from "react";

const MyToysRow = ({ bookedToy, handleDelete }) => {
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
  } = bookedToy;

  return (
    <div>
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default MyToysRow;
