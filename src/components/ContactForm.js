import React, { useState, useRef, useEffect } from "react";
import useInput from "../hooks/useInput";
import emailjs from "@emailjs/browser";

const validateEmailHandler = (email) => {
  const myRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const modifiedEmail = email.toLowerCase().trim();
  return myRegex.test(modifiedEmail);
};

const validateNameHandler = (name) => {
  return name.trim().length > 3;
};
const validateMessageHandler = (message) => {
  return message.trim().length > 10;
};
const ContactForm = () => {
  const form = useRef();
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const {
    value: name,
    valueHasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueIsValid: nameIsValid,
    resetValue: resetName,
    blurHandler: nameBlurHandler,
  } = useInput(validateNameHandler);
  const {
    value: email,
    valueHasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueIsValid: emailIsValid,
    resetValue: resetEmail,
    blurHandler: emailBlurHandler,
  } = useInput(validateEmailHandler);
  const {
    value: message,
    valueHasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueIsValid: messageIsValid,
    resetValue: resetMessage,
    blurHandler: messageBlurHandler,
  } = useInput(validateMessageHandler);

  const formIsValid = emailIsValid && nameIsValid && messageIsValid;

  useEffect(() => {
    if (formSuccess) {
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }
    if (formError) {
      setTimeout(() => {
        setFormError(false);
      }, 7000);
    }
  }, [formSuccess, formError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    emailjs
      .sendForm(
        "service_h02f4qv",
        "template_puwpisg",
        form.current,
        "R7jAWGM_g9F_xoeGU"
      )
      .then(
        () => {
          setFormSuccess(true);
          resetName();
          resetEmail();
          resetMessage();
        },
        (error) => {
          setFormError(true);
          console.log(error);
        }
      );
  };

  return (
    <>
      {formSuccess && (
        <p className="text-center text-green-600 font-bold text-lg drop-shadow my-2">
          Thank you for contacting. We will be in touch soon!
        </p>
      )}
      {formError && (
        <p className="text-center text-red-600 font-bold text-lg drop-shadow my-2">
          Oops something went wrong. Please try again in a moment.
        </p>
      )}
      <form
        className="bg-gradient-to-br text-gray-50 from-slate-900 via-slate-600 to-slate-900 px-4 py-2 md:py-4 md:px-8 rounded-lg drop-shadow-lg md:w-[70%] lg:w-[40rem] mx-auto my-4 text-sm text-basic md:text-lg"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div>
          <label className="block font-bold  my-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`${
              nameHasError ? "border-b-4 border-red-600" : ""
            }  bg-slate-300 w-full focus:outline-none rounded-lg p-2 text-gray-600 shadow focus:shadow-lg focus:-translate-y-1 transition duration-150 ease-in-out`}
            value={name}
            onChange={nameChangeHandler}
            required
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="text-red-400 my-1">Please add a valid name</p>
          )}
        </div>

        <div>
          <label className=" block font-bold  my-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={` ${
              emailHasError ? "border-b-4 border-red-600" : ""
            }  w-full bg-slate-300 focus:outline-none  rounded-lg p-2 text-gray-600 shadow focus:shadow-lg focus:-translate-y-1 transition duration-150 ease-in-out`}
            value={email}
            onChange={emailChangeHandler}
            required
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="text-red-400 my-1">Please add a valid email</p>
          )}
        </div>

        <div>
          <label className="block font-bold  my-2" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="text"
            value={message}
            onChange={messageChangeHandler}
            className={`${
              messageHasError ? "border-2 border-red-600" : ""
            }  w-full focus:outline-none bg-slate-300  rounded-lg p-2 text-gray-600 shadow focus:shadow-lg focus:-translate-y-1 transition duration-150 ease-in-out`}
            required
            onBlur={messageBlurHandler}
          />
          {messageHasError && (
            <p className="text-red-400 my-1">
              Your text must be at least 10 characters long
            </p>
          )}
        </div>

        <button
          className={`${
            !formIsValid
              ? "text-gray-500 cursor-not-allowed"
              : "text-gray-900 focus:outline-none hover:bg-slate-400 focus:ring-4 focus:ring-slate-400"
          }  bg-slate-300 border border-slate-400  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  my-2 shadow`}
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
