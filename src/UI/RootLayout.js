import React, { useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth-actions";
import { authActions } from "../store/authSlice";
import { uiActions } from "../store/uiSlice";
const RootLayout = () => {
  const dispatch = useDispatch();

  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1000) {
      dispatch(uiActions.showMobileNavbar());
    } else {
      dispatch(uiActions.hideMobileNavbar());
    }
  }, [windowWidth, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const storedExpiration = localStorage.getItem("expiration");
    const expiration = new Date(storedExpiration);
    const now = new Date();
    const remainingDuration = expiration.getTime() - now.getTime();

    if (remainingDuration < 0) {
      dispatch(logoutUser());
    } else {
      dispatch(authActions.login({ token }));
      setTimeout(() => {
        dispatch(logoutUser());
      }, remainingDuration);
    }
  }, [dispatch]);
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
