import React from "react";
import { useRouteError, Link } from "react-router-dom";
import RootLayout from "./RootLayout";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const errorData = useRouteError();
  const { message } = errorData;
  return (
    <>
      <MainNavigation />
      <div className="pt-[7rem] pb-8 px-[2rem] flex flex-col items-center text-gray-600 bg-slate-300 h-[100vh] space-y-4">
        <h1 className="main-heading sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] drop-shadow">
          Oops Something Went Wrong
        </h1>
        <p className="text-lg font-bold">{message}</p>
        <Link
          to="/"
          className="rounded-lg bg-slate-500 hover:bg-slate-600 text-white font-bold p-2 block  w-[max-content] drop-shadow"
        >
          Go to home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
