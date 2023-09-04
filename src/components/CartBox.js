import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { uiActions } from "../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartBox = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);
  const totalCartQuantity = cartState.items.reduce(
    (sum, acc) => sum + acc.quantity,
    0
  );
  const cartQuantity = totalCartQuantity || 0;
  return (
    <div
      onClick={() => dispatch(uiActions.showCart())}
      className="flex items-center justify-center bg-gray-200 px-2 py-1 rounded-lg text-slate-700 space-x-2 ml-8 cursor-pointer"
    >
      <BsFillCartFill className="h-[1.3rem] w-[1.3rem]" />
      <span className="">{cartQuantity}</span>
    </div>
  );
};

export default CartBox;
