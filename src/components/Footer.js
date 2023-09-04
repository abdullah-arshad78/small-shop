import React from "react";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white text-center pt-[4rem] px-8 lg:px-[8rem] pb-1">
      <h2 className="main-heading text-[2rem] uppercase">Woodlock</h2>
      <div className="flex items-center justify-center flex-col-reverse md:flex-row md:justify-between mt-6 text-gray-200">
        <div className="w-[20rem] mb-[2rem] md:mb-0 text-center md:text-left space-y-4  ">
          <address className="flex flex-col items-center justify-center mb-6 md:mb-0 md:flex-row md:items-start md:justify-start no-decoration">
            <ImLocation className="w-8 h-8 mb-2 md:mb-0 mr-2" /> 123 Main
            Street, Anytown, Somewhere County, 98765
          </address>
          <span className="flex flex-col items-center justify-center  md:flex-row md:items-start md:justify-start mb-6 md:mb-0">
            <MdEmail className="w-8 h-8 mb-2 md:mb-0 mr-2" />{" "}
            example@woodlock.com
          </span>
          <span className="flex flex-col items-center justify-center  md:flex-row md:items-start md:justify-start mb-6 md:mb-0">
            <HiPhone className="w-8 h-8 mb-2 md:mb-0 mr-2" /> +1 555-123-4567
          </span>
        </div>
        <div className="space-y-4 font-bold my-[3rem] md:my-0">
          <Link
            to="/products"
            className="flex items-center justify-start hover:bg-gray-500 p-1 rounded-lg hover:-rotate-12 transition duration-200 ease-in-out"
          >
            <AiFillShopping className="mr-1 w-8 h-8 " /> PRODUCTS
          </Link>
          <Link
            to="/about"
            className="flex items-center justify-start hover:bg-gray-500 p-1 rounded-lg hover:-rotate-12 transition duration-200 ease-in-out"
          >
            <BsFillPersonFill className="mr-1 w-8 h-8" />
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-start hover:bg-gray-500 p-1 rounded-lg hover:-rotate-12 transition duration-200 ease-in-out"
          >
            <RiContactsBook2Fill className="mr-1 w-8 h-8" />
            CONTACT
          </Link>
        </div>
      </div>
      <p>&copy; Abdullah 2023</p>
    </div>
  );
};

export default Footer;
