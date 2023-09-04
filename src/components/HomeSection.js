import React from "react";
import "./HomeSection.css";
import MainButton from "../UI/MainButton";
const HomeSection = () => {
  return (
    <div className="home-section  items-end  ">
      <div className="absolute text-center lg:text-left top-[50%]  right-[50%] translate-x-[50%] -translate-y-[60%] lg:translate-x-[0] lg:translate-y-[0] lg:top-[28vh] lg:right-[10vw] w-[60%] lg:w-[50%]">
        <h1 className="main-heading text-[1.7rem] md:text-[2rem] text-slate-800 ">
          Seamless Shopping. Endless Selection.
        </h1>
        <span className="secondary-heading text-[1.5rem] lg:text-[1.7rem] text-slate-600">
          Discover our vast collection of affordable and trendy items
        </span>
        <div className="flex lg:block w-full justify-center items-center">
          <MainButton path="/products">See All Products</MainButton>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
