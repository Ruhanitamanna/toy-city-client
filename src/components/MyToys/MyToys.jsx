import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [bookedToys, setBookedToys] = useState([]);
  const url = `https://toy-city-server.vercel.app/bookedToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookedToys(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://toy-city-server.vercel.app/bookedToys${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookedToys.filter(
              (bookedToy) => bookedToy._id !== id
            );
            setBookedToys(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://toy-city-server.vercel.app/bookedToys${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update status
          const remaining = bookedToys.filter(
            (bookedToy) => bookedToy.id !== id
          );
          const updated = bookedToys.find((bookedToy) => bookedToy._id === id);
          updated.status = "confirm";
          const newBookedToys = [updated, ...remaining];
          setBookedToys(newBookedToys);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <button className="btn btn-circle btn-sm">
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
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Available toys</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {bookedToys.map((bookedToy) => (
              <MyToysRow
                key={bookedToy._id}
                bookedToy={bookedToy}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
