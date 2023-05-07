import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Adam",
      img: people1,
      review:
        '"I had a great experience at the dental appointment portal. The staff was friendly and professional, and the process was quick and easy. I highly recommend it to anyone in need of dental care"',
      location: "Dhaka, Bangladesh",
    },
    {
      _id: 2,
      name: "Eve",
      img: people2,
      review:
        '"The dental appointment portal made it so easy to schedule my checkup, and the staff were friendly and professional during my visit. Highly recommended!"',
      location: "Punjab",
    },
    {
      _id: 3,
      name: "Samantha",
      img: people3,
      review:
        '"The dental team was friendly and professional. They made me feel comfortable during my appointment and answered all of my questions. I highly recommend this dental practice"',
      location: "Kolkata",
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
