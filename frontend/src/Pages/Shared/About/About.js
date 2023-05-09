import React from "react";
// import "./About.css";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto block pt-16">
        <h1 className="text-4xl font-bold text-center pb-4">About Us</h1>
        <h3 className="text-xl font-semibold text-center pb-6">
          We are welcome you to our Dentistry Portal
        </h3>
        <div className="grid grid-cols-1 py-14">
          <div className="grid grid-cols-2 gap-8 pb-12">
            <p className="text-lg">
              Our team of dedicated experts strives to improve the accessibility
              and quality of healthcare services for everyone. Through our app,
              we provide affordable, and accessible healthcare to patients,
              fulfilling our mission to make healthcare more accessible and
              enhance the overall patient experience.
            </p>
            <p className="text-lg">
              Our team is composed of seasoned healthcare professionals,
              including doctors, nurses, and other medical experts, who have
              extensive experience in their field. Our passion lies in providing
              exceptional care to our patients, and we utilize the latest
              technologies to achieve this objective.
            </p>
            <p className="text-lg">
              Our Doctor app provides patients with the ability to schedule
              appointments consult with doctors through video calls and medical
              advice from the comfort of their own homes. Our doctors are
              available 24/7 to answer any questions you may have and provide
              you with personalized care and attention.
            </p>
            <p className="text-lg">
              We understand the importance of good health, and we are committed
              to providing you with the best possible care. Our team of
              healthcare professionals is passionate about ensuring your
              well-being and utilizing the latest technologies to deliver
              personalized and effective treatments.
            </p>
          </div>
          <div>
            <p className="text-center text-lg">
              Thank you for choosing our Doctor app for your healthcare needs.
              We are dedicated to providing you with exceptional care and
              personalized attention to help you achieve your health and
              wellness goals. We look forward to serving you and supporting your
              journey towards optimal health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
