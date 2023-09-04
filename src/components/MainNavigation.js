import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import CategoriesHeaderContainer from "./CategoriesHeaderContainer";

import CartBox from "./CartBox";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./CartContainer";
import AuthButon from "./AuthButon";
import LogoutButton from "./LogoutButton";
import HamburgerContainer from "./HamburgerContainer";
import { uiActions } from "../store/uiSlice";
import MobileNavigationContainer from "./MobileNavigationContainer";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showCategories, setShowCategories] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState(false);
  const isCartShown = useSelector((state) => state.uiState.showCart);
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);

  const backgroundStyleHandler = () => {
    window.scrollY >= 70 ? setBackgroundStyle(true) : setBackgroundStyle(false);
  };
  const navBackgroundStyles =
    isHome && !backgroundStyle
      ? "text-slate-70"
      : "bg-slate-800 text-white border-b-1";

  //NavLinks colors when active
  const isActiveHandler = ({ isActive }) => {
    let navLinkClasses = `px-2 py-1 rounded-lg ${
      isHome && !backgroundStyle ? "hover:bg-slate-100" : "hover:bg-slate-600"
    } `;
    return isActive ? `${navLinkClasses} bg-slate-600 ` : navLinkClasses;
  };
  const mobileNavigation = useSelector(
    (state) => state.uiState.mobileNavigation
  );
  const { isMobileNavigation, showMobileNavigation } = mobileNavigation;
  useEffect(() => {}, [showMobileNavigation]);
  useEffect(() => {
    window.addEventListener("scroll", backgroundStyleHandler);
    return () => {
      window.removeEventListener("scroll", backgroundStyleHandler);
    };
  }, []);
  const showCategoryHandler = () => setShowCategories(true);
  const removeCategoryHandler = () => {
    if (!!showCategories) {
      setShowCategories(false);
    }
  };
  return (
    <>
      <header
        className={`flex p-3 sm:px-[3rem] items-center justify-between fixed left-0 top-0 w-screen max-w-screen z-10 ${navBackgroundStyles}`}
      >
        <Link to="/">
          {/* <div className="w-[9rem] sm:w-[11rem] ">
          <img src={logo} alt="containing a lock and text" />
        </div> */}
          <span className="main-heading text-[1.7rem]  md:text-[2rem] flex ">
            <div>WOODLOCK </div>
          </span>
        </Link>
        <nav>
          <ul className="flex items-center justify-center font-bold ">
            {!isMobileNavigation && (
              <>
                <li className={`mr-3`} onMouseEnter={removeCategoryHandler}>
                  <NavLink className={isActiveHandler} to="/products">
                    PRODUCTS
                  </NavLink>
                </li>

                <li className={`mx-3`} onMouseOver={showCategoryHandler}>
                  <div className="hover:cursor-pointer relative">
                    {" "}
                    CATEGORIES{" "}
                    {showCategories && (
                      <CategoriesHeaderContainer
                        onMouseLeave={removeCategoryHandler}
                      />
                    )}
                  </div>
                </li>
                <li className={`mx-3`} onMouseEnter={removeCategoryHandler}>
                  <NavLink to="/about" className={isActiveHandler}>
                    ABOUT
                  </NavLink>
                </li>
                <li className={`ml-3`} onMouseEnter={removeCategoryHandler}>
                  <NavLink to="/contact" className={isActiveHandler}>
                    CONTACT
                  </NavLink>
                </li>
                <li>
                  {!isLoggedIn && <AuthButon />}
                  {isLoggedIn && <LogoutButton />}
                </li>
                <li>
                  <CartBox />
                </li>
              </>
            )}
            {isMobileNavigation && (
              <>
                <li>
                  {" "}
                  <HamburgerContainer />
                </li>
                <li>
                  <CartBox />
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {isCartShown && (
        <Modal onClosed={() => dispatch(uiActions.hideCart())}>
          <CartContainer />
        </Modal>
      )}
      {showMobileNavigation && (
        <Modal onClosed={() => dispatch(uiActions.hideMobileNavigation())}>
          <MobileNavigationContainer />
        </Modal>
      )}
    </>
  );
};

export default MainNavigation;
