import React, { useEffect } from "react";
import { sendUserdata } from "../store/auth-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useInput from "../hooks/useInput";

const validateEmailHandler = (email) => {
  const myRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const modifiedEmail = email.toLowerCase().trim();
  return myRegex.test(modifiedEmail);
};

const validatePasswordHandler = (password) => {
  return password.trim().length > 6;
};

const AuthForm = ({ type }) => {
  const uiState = useSelector((state) => state.uiState);
  const { status, message } = uiState.notification;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    value: emailVal,
    valueHasError: emailHasError,
    blurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    valueIsValid: emailIsValid,
  } = useInput(validateEmailHandler);
  const {
    value: passwordVal,
    valueHasError: passwordHasError,
    blurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    valueIsValid: passwordIsValid,
  } = useInput(validatePasswordHandler);
  const disabledForm =
    !emailIsValid || !passwordIsValid || status === "Pending";

  const submithandler = (e) => {
    e.preventDefault();

    if (emailIsValid && passwordIsValid) {
      const userObject = { email: emailVal, password: passwordVal, type };
      dispatch(sendUserdata(userObject));
    } else {
      return;
    }
  };

  useEffect(() => {
    if (status === "Success") {
      navigate("/");
    }
  }, [status, navigate]);
  return (
    <form
      onSubmit={submithandler}
      className="text-basic md:text-lg bg-gray-100 p-2 rounded-lg drop-shadow-lg w-[95%] max-w-[30rem]"
    >
      <div>
        <label className="font-bold block text-slate-600">Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailVal}
          className="w-full mb-2 mt-2 p-2 rounded-lg"
          type="email"
        ></input>
        {emailHasError && (
          <p className="text-red-500 text-sm mb-2">
            Please provide a valid email
          </p>
        )}
      </div>
      <div>
        <label className="font-bold block text-slate-600">Password</label>
        <input
          className="w-full mb-2 mt-2 p-2 rounded-lg"
          type="password"
          minLength={6}
          value={passwordVal}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        ></input>
        {passwordHasError && (
          <p className="text-red-500 text-sm mb-2">
            Password must be greater than 6 characters
          </p>
        )}
      </div>
      <button
        disabled={disabledForm}
        className={`main-btn font-bold block w-[max-content]  text-white rounded-lg px-6 py-2 mt-4  ${
          disabledForm
            ? "bg-slate-500  cursor-not-allowed"
            : "bg-slate-800 hover:bg-slate-700 hover:scale-[1.01] hover:-translate-y-[.2rem] transition-all duration-200 ease-in-out "
        }`}
      >
        {status === "Pending" ? "Sending Data..." : "Submit"}
      </button>
      {status === "Error" && (
        <p className="text-red-500 text-sm my-2">
          Oops something went wrong. Try again.
        </p>
      )}
    </form>
  );
};

export default AuthForm;
