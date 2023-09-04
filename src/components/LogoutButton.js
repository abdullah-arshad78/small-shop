import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth-actions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <button
      onClick={logoutHandler}
      className="flex items-center justify-center bg-gray-200 px-2 py-1 rounded-lg text-slate-700 space-x-2 ml-8 cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
