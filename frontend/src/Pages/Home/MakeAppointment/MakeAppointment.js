import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            src={doctor}
            alt=""
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h4 className="text-lg text-primary font-bold">Appointment</h4>
            <h1 className=" text-white text-4xl font-bold">
              Make an appointment Today
            </h1>
            <p className="text-white py-6">
              The dental appointment portal is a user-friendly web application
              that allows patients to schedule dental appointments online. With
              features such as appointment booking, treatment options, and
              dental tips, the portal is designed to provide an efficient and
              convenient experience for patients seeking dental care.
            </p>
            <Link to="/appointment">
              <PrimaryButton>Appointment</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
