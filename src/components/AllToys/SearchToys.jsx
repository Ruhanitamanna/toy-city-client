import React, { useState } from "react";

const SearchToys = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div>
      <form className="join" onSubmit={handleSubmit}>
        <input
          className="input input-bordered join-item"
          name="search"
          placeholder="Name of the toy"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-secondary join-item rounded-r-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchToys;
