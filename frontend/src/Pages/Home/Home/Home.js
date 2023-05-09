import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact.jsx";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <MakeAppointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
