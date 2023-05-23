import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const AllToysRow = ({ bookedToy }) => {
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

  const { user } = useContext(AuthContext);

  return (
    <tr>
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
      <td>
        {user ? (
          <Link to={`/singleToy/:${_id}`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        ) : (
          <Link to={`/login`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default AllToysRow;
