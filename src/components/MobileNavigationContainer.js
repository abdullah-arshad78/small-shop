import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthButon from "./AuthButon";
import { uiActions } from "../store/uiSlice";
import LogoutButton from "./LogoutButton";

const CATEGORIES_INFO = [
  {
    id: "c1",
    name: "electronics",
  },
  {
    id: "c2",
    name: "jewelery",
  },
  {
    id: "c1",
    name: "men's clothing",
  },
  {
    id: "c1",
    name: "women's clothing",
  },
];
const MobileNavigationContainer = () => {
  const [showCategories, setShowCategories] = useState(false);
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);
  const dispatch = useDispatch();
  const hideNavigationHandler = () => {
    dispatch(uiActions.hideMobileNavigation());
  };
  const classesForMobNav =
    "text-white uppercase font-bold text-[2rem] drop-shadow hover:text-slate-300 cursor-pointer my-2";
  const classesForLink =
    "hover:border-b-2 border-slate-300 py-2 px-1 transition-all duration-150 ease-in";

  const categoriesMobContainer = CATEGORIES_INFO.map(({ id, name }) => (
    <div key={id}>
      <Link
        className="hover:border-b-2 border-slate-600 py-2  px-1 transition-all duration-150 ease-in"
        onClick={hideNavigationHandler}
        to={`/products?category=${name}`}
      >
        {name}
      </Link>
    </div>
  ));
  return (
    <ul
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col  space-between p-4 mt-[10vh] text-center  "
    >
      <li onClick={hideNavigationHandler} className={classesForMobNav}>
        <Link to="/" className={classesForLink}>
          Home
        </Link>
      </li>
      <li onClick={hideNavigationHandler} className={classesForMobNav}>
        <Link to="/products" className={classesForLink}>
          Products
        </Link>
      </li>
      <li onClick={hideNavigationHandler} className={classesForMobNav}>
        <Link to="/about" className={classesForLink}>
          About
        </Link>
      </li>
      <li onClick={hideNavigationHandler} className={classesForMobNav}>
        <Link to="/contact" className={classesForLink}>
          Contact
        </Link>
      </li>
      <li className={classesForMobNav}>
        <span
          onClick={() => setShowCategories((preVal) => !preVal)}
          className={`${classesForLink} ${
            showCategories &&
            "text-slate-600 bg-slate-100 rounded-lg border-none "
          }`}
        >
          Categories
        </span>
      </li>
      {showCategories && (
        <li className=" mobile-categories-animation bg-slate-100 rounded-lg shadow-lg  uppercase font-bold text-slate-600 flex flex-col items-center justify-between space-y-2 py-4">
          {categoriesMobContainer}
        </li>
      )}
      <li onClick={hideNavigationHandler} className="mr-8 my-2">
        {!isLoggedIn && <AuthButon />}
        {isLoggedIn && (
          <div className="w-full h-full flex items-center justify-center">
            {" "}
            <LogoutButton />{" "}
          </div>
        )}
      </li>
    </ul>
  );
};

export default MobileNavigationContainer;
