import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <button className="btn btn-secondary"> Go Back to Home</button>
      </Link>
      <img
        src="https://media.istockphoto.com/id/1466379261/photo/top-view-of-coffee-as-number-0-number-404-as-error-of-non-existent-website.jpg?s=1024x1024&w=is&k=20&c=p-1EfsvdJOr5QKhY4oqTijDsIY8mbCFQ6S-BLWX-Trg="
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
