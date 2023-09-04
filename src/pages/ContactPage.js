import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[7rem] pb-8 px-[2rem] text-gray-600">
      <h1 className="secondary-heading text-[2.2rem] text-center text-slate-600">
        Contact Us!
      </h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
