import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

const HamburgerContainer = () => {
  const dispatch = useDispatch();
  const mobileNavigation = useSelector(
    (state) => state.uiState.mobileNavigation
  );
  const { showMobileNavigation } = mobileNavigation;
  const classes = "w-[2rem]  h-[2rem] z-20";
  return (
    <div
      onClick={() => dispatch(uiActions.toggleMobileNavigation())}
      className="flex items-center justify-center cursor-pointer p-2 hover:bg-slate-500 rounded-full drop-shadow-lg"
    >
      {!showMobileNavigation && <GiHamburgerMenu className={classes} />}
      {showMobileNavigation && <ImCross className={classes} />}
    </div>
  );
};

export default HamburgerContainer;
