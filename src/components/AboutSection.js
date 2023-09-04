import React from "react";
import "./AboutSection.css";
import MainButton from "../UI/MainButton";

const AboutSection = () => {
  return (
    <div className="md:grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
      <div className="px-[4rem] py-[6rem] bg-[#e8e2e2]">
        <div className="about-sec-container relative">
          <h2 className=" text-basic md:text-xl text-slate-600 font-bold about-heading py-8">
            For 50 years, our furniture business store has been synonymous with
            excellence. We pride ourselves on delivering high-quality furniture
            and exceptional service to our valued customers. With a commitment
            to craftsmanship and attention to detail, we have built a reputation
            as a trusted provider of beautiful and functional furniture. Trust
            us to furnish your space with timeless pieces that will enhance your
            home for years to come.
          </h2>
          <MainButton path="/about">Learn More</MainButton>
        </div>
      </div>
      <div className="about-bg-img"> &nbsp;</div>
    </div>
  );
};

export default AboutSection;
