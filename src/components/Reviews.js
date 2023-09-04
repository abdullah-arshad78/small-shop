import React from "react";
import { AiFillStar } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { customerReviews } from "../content";
const customerReviewsContent = customerReviews.map((customer) => {
  const starArr = [];
  for (let i = customer.rating; i > 0; i--) {
    starArr.push({
      id: uuid(),
      starRating: (
        <AiFillStar className="fill-[#FFD95A] w-8 h-8 drop-shadow-lg" />
      ),
    });
  }
  return { ...customer, stars: starArr };
});
const Reviews = () => {
  const customerItems = customerReviewsContent.map((customer) => (
    <div
      key={customer.id}
      className="flex flex-col-reverse lg:flex-row p-0 lg:p-6 items-center"
    >
      {" "}
      <div className="flex flex-col items-center justify-center mt-4 lg:mt-0">
        <div className=" w-[7rem] md:w-[10rem] lg:w-[15rem] ">
          <img
            src={customer.image}
            className="h-full w-full drop-shadow-lg"
            alt={customer.fullName}
          ></img>
        </div>
        <div className="flex">
          {customer.stars.map((starObj) => (
            <span className="m-1 mt-4" key={starObj.id}>
              {starObj.starRating}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 px-4 py-6 lg:px-12 lg:py-8 rounded-lg shadow-lg text-sm md:text-basic  lg:text-lg text-gray-600 mx-12 xl:mx-14 ">
        <blockquote>{customer.description}</blockquote>
        <span className="secondary-heading ">- {customer.fullName}</span>
      </div>
    </div>
  ));
  return (
    <div className="bg-gradient-to-r from-blue-900 to-cyan-600">
      <h2 className="secondary-heading text-center text-white text-[1.3rem] md:text-[2rem] py-[3rem] px-[2rem]">
        What Our Customers Have To Say
      </h2>
      <Carousel
        className="w-11/12 mx-auto p-[1rem]"
        autoPlay={true}
        autoFocus={true}
        infiniteLoop={true}
        interval={5000}
      >
        {customerItems}
      </Carousel>
    </div>
  );
};

export default Reviews;
