import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { uiActions } from "../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";
const trimToTenChar = (str) => {
  if (str.trim().length > 10) {
    return str.slice(0, 10) + "...";
  } else {
    return str;
  }
};
const CartContainer = () => {
  const [isCheckout, setIsCheckout] = useState(null);
  const addTocartHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        price: item.price,
        quantity: 1,
        title: item.title,
      })
    );
  };
  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeFromCart({ id }));
  };
  const checkoutHandler = () => {
    setIsCheckout("checkingout");
    dispatch(cartActions.resetCart());
  };
  useEffect(() => {
    if (isCheckout === "checkingout") {
      setTimeout(() => {
        setIsCheckout("checked");
      }, 3000);
    }
  }, [isCheckout]);
  useEffect(() => {
    if (isCheckout === "checked") {
      setTimeout(() => {
        setIsCheckout(null);
      }, 3000);
    }
  }, [isCheckout]);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);
  const cartItemArr = cartState.items;
  const cartHasItems = cartItemArr.length > 0;
  const cartItems = cartItemArr.map((item) => (
    <div
      key={item.id}
      className="flex justify-between items-center bg-white shadow px-4 py-1 rounded-lg "
    >
      <h2 className="secondary-heading  text-slate-600  w-1/3">
        {trimToTenChar(item.title)}
      </h2>{" "}
      <span className="font-bold w-1/3 text-center">${item.price}</span>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 w-1/3">
        {" "}
        <button
          onClick={removeFromCartHandler.bind(null, item.id)}
          className="p-1 text-white rounded-lg shadow bg-red-700"
        >
          <AiOutlineMinus />
        </button>
        <span className="font-bold text-slate-700">{item.quantity}</span>
        <button
          onClick={addTocartHandler.bind(null, item)}
          className="p-1 text-white rounded-lg shadow bg-green-700"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  ));
  const cartItemsHeaders = (
    <div className="flex justify-between items-center bg-gray-50 shadow px-4 py-1 rounded-lg  font-bold secondary-heading mt-2 text-green-700 ">
      <h2 className="w-1/3">Titile</h2>
      <h2 className="w-1/3">Price</h2>
      <h2 className="w-1/3">Quantity</h2>
    </div>
  );
  const handleClick = (e) => e.stopPropagation();
  const cartContainerContents = (
    <>
      {cartItemArr.length > 0 ? (
        <>
          {cartItemsHeaders}
          {cartItems}
        </>
      ) : (
        <p>No products found</p>
      )}
      {/* {cartItemsHeaders}
{cartItems} */}
      <div>
        <button
          onClick={() => dispatch(uiActions.hideCart())}
          className="rounded-lg shadow border-2 border-slate-700 p-1 text-slate-700 mr-2"
        >
          Cancel
        </button>
        {cartHasItems && isLoggedIn && (
          <button
            onClick={checkoutHandler}
            className="rounded-lg shadow border-2 border-slate-700 p-1 bg-slate-700 text-white"
          >
            Checkout
          </button>
        )}
        {cartHasItems && !isLoggedIn && (
          <Link
            to="/auth?type=login"
            onClick={() => dispatch(uiActions.hideCart())}
            className="rounded-lg shadow border-2 border-slate-700 p-1 bg-slate-700 text-white"
          >
            Login to Checkout
          </Link>
        )}
      </div>
    </>
  );

  const checkingOutContent = (
    <div className="flex items-center justify-center flex-col">
      <Loader />
      <p className="secondary-heading text-lg my-2">Ordering...</p>
    </div>
  );

  const checkedContent = (
    <>
      <p className="text-center text-green-800 text-xl secondary-heading">
        Order placed successfully
      </p>
    </>
  );

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-between justify-center px-4 py-10 bg-gray-200 opacity-100 mt-[10vh] rounded-lg shadow-lg w-11/12 lg:w-[60%] space-y-2 lg:space-y-4 text-sm sm:text-basic md:text-lg text-center max-h-[90%] overflow-y-auto"
    >
      {!isCheckout && cartContainerContents}
      {isCheckout === "checkingout" && checkingOutContent}
      {isCheckout === "checked" && checkedContent}
    </div>
  );
};

export default CartContainer;
