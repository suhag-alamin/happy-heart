import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <Banner></Banner>
      {/* features section  */}
      <Features></Features>
      {/* service section  */}
      <Service></Service>
    </div>
  );
};

export default Home;
