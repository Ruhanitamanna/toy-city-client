import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory";
import UpcomingToys from "../UpcomingToys/UpcomingToys";
import ReviewPage from "../ReviewPage/ReviewPage";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init();

const Home = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-offset="200"
    >
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCategory></SubCategory>
      <UpcomingToys></UpcomingToys>
      <ReviewPage></ReviewPage>
    </div>
  );
};

export default Home;
