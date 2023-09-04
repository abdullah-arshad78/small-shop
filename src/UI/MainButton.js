import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const MainButton = ({ children, path }) => {
  return (
    <Link
      className="main-btn block w-[max-content] bg-slate-800 text-white text-basic md:text-[1.3rem] secondary-heading rounded-lg px-6 py-2 mt-4 shadow-lg shadow-neutral-500/50 hover:bg-slate-700 hover:scale-[1.01] hover:-translate-y-[.2rem] transition-all duration-200 ease-in-out"
      to={path}
    >
      {children}{" "}
      <BsArrowRight className="inline text-[1.6rem]  main-btn-arrow" />
    </Link>
  );
};

export default MainButton;
