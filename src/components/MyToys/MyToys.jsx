import React from "react";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {
  const toy = useLoaderData();
  return (
    <div>
      <h1>My toys</h1>
    </div>
  );
};

export default MyToys;
