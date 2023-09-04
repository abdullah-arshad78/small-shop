import React from "react";
import { createPortal } from "react-dom";
const portalEl = document.getElementById("overlay");

const Backdrop = ({ children, onClosed }) => {
  return (
    <div
      onClick={onClosed}
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-[rgba(0,0,0,.7)] flex items-start justify-center"
    >
      {children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClosed={props.onClosed}>{props.children}</Backdrop>,
        portalEl
      )}
    </>
  );
};

export default Modal;
