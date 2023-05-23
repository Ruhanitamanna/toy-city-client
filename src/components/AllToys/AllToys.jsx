import React, { useEffect, useState } from "react";
import AllToysRow from "./AlltoysRow";
// import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [bookedToys, setBookedToys] = useState([]);
  const url = `https://toy-city-server.vercel.app/bookedToys`;
  useEffect(() => {
    fetch("https://toy-city-server.vercel.app/bookedToys")
      .then((res) => res.json())
      .then((data) => setBookedToys(data));
  }, [url]);

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
            </tr>
          </thead>
          <tbody>
            {bookedToys.map((bookedToy) => (
              <AllToysRow
                key={bookedToy._id}
                bookedToy={bookedToy}
              ></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
