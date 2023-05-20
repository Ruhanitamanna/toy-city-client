import image from "../../assets/images/toyCity2.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url("https://cdn.w600.comps.canstockphoto.com/cute-animal-toys-stock-illustrations_csp9003325.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <br />
            <span className="text-secondary">TOY CITY</span>
          </h1>
          <p className="mb-5">
            Discover a captivating collection of toys carefully curated with
            love and care. From classic favorites to the latest trends, we have
            something for every child's unique interests and age group
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
