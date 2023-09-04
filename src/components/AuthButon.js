import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AuthButon = () => {
  return (
    <Link
      to="/auth?type=signup"
      className="flex items-center justify-center bg-gray-200 px-2 py-1 rounded-lg text-slate-700 space-x-2 ml-8 cursor-pointer"
    >
      <BsFillPersonFill className="h-[1.3rem] w-[1.3rem]" />{" "}
      <span>Login/Register</span>
    </Link>
  );
};

export default AuthButon;
