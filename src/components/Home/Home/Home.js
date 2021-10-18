import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Service from "../Service/Service";
import Testtimonial from "../Testtimonial/Testtimonial";

const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <Banner></Banner>
      {/* features section  */}
      <Features></Features>
      {/* service section  */}
      <Service></Service>
      {/* testimonial section  */}
      <Testtimonial></Testtimonial>
    </div>
  );
};

export default Home;
