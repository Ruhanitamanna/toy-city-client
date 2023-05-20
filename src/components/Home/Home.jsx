import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory";
import UpcomingToys from "../UpcomingToys/UpcomingToys";
import ReviewPage from "../ReviewPage/ReviewPage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCategory></SubCategory>
      <UpcomingToys></UpcomingToys>
      <ReviewPage></ReviewPage>
    </div>
  );
};

export default Home;
