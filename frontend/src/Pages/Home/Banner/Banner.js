import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Dental Care's Home</h1>
          <p className="py-6">
            The dental appointment portal is designed to streamline the process
            of booking dental appointments for patients, providing a
            user-friendly and accessible interface. By offering the ability to
            schedule appointments online, patients can easily find available
            times and book appointments at their convenience.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
