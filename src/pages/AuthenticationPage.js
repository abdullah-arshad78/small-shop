import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AuthForm from "../components/AuthForm";
const AuthenticationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("type") === "login";
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const changeSearchParamsHandler = () => {
    if (isLogin) {
      searchParams.set("type", "signup");
    } else {
      searchParams.set("type", "login");
    }
    setSearchParams(searchParams);
  };
  return (
    <div className="pt-[7rem] px-[2rem] flex flex-col justify-start items-center">
      <h1 className="secondary-heading text-center text-[3rem] text-slate-600">
        {isLogin ? "login" : "signup"}
      </h1>
      <AuthForm type={isLogin ? "login" : "signup"} />
      <button
        className="text-blue-700 bg-gray-200 p-2 my-4 font-bold shadow"
        type="button"
        onClick={changeSearchParamsHandler}
      >
        {isLogin ? "Signup Instead?" : "Login Instead?"}
      </button>
    </div>
  );
};

export default AuthenticationPage;
