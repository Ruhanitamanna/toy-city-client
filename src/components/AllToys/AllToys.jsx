import React, { useEffect, useState } from "react";
import AllToysRow from "./AlltoysRow";
import SearchToys from "./SearchToys";

const AllToys = () => {
  const [bookedToys, setBookedToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);

  const url = `https://toy-city-server.vercel.app/bookedToys`;
  useEffect(() => {
    fetch("https://toy-city-server.vercel.app/bookedToys")
      .then((res) => res.json())
      .then((data) => {
        setBookedToys(data);
        setFilteredToys(data);
      });
  }, [url]);

  const handleSearch = (searchQuery) => {
    const filtered = bookedToys.filter((bookedToy) => {
      if (
        bookedToy.name &&
        searchQuery &&
        bookedToy.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setFilteredToys(filtered);
  };

  return (
    <div>
      <div className="justify-center align-center p-2 m-4">
        <SearchToys handleSearch={handleSearch}></SearchToys>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Available toys</th>
              <th></th>
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
