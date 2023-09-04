import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { SlArrowDown } from "react-icons/sl";
const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState();
  const toggleShowingDescription = () =>
    setShowDescription((prevVal) => !prevVal);
  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity((prevVal) => prevVal + 1);
    }
    return;
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevVal) => prevVal - 1);
    }
    return;
  };
  const addTocartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        title: product.title,
        quantity,
        price: product.price,
      })
    );
  };
  return (
    <div className="pt-[7rem] px-8 grid grid-rows-2 md:grid-cols-5 md:grid-rows-none gap-4 mb-6">
      <div className="col-start-1 col-end-6 md:col-end-4 row-start-1 row-end-2  m-4 flex items-center justify-center bg-slate-100 md:bg-transparent rounded-lg drop-shadow">
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto  w-full  drop-shadow rounded-lg"
        ></img>
      </div>
      <div className="flex flex-col items-center md:items-start justify-center md:col-start-4 col-start-1 col-end-6 ">
        <h2 className="secondary-heading my-4 text-lg w-[80%] text-center md:text-left md:text-xl mb-2">
          {product.title}
        </h2>
        <div className="flex items-center justify start space-x-4 ">
          <Rating
            readonly={true}
            initialValue={product.rating.rate}
            size={25}
            fillColor="#025464"
          />{" "}
          <span className="drop-shadow">{product.rating.count}</span>
        </div>
        <span className="text-center md:text-left block border-y-4 py-8 text-slate-600 font-bold text-xl my-[2rem] w-full">
          ${product.price}
        </span>
        <p className="text-lg font-bold">Quantity:</p>
        <div className="text-lg flex items-center start space-x-8 mb-6">
          <div className="flex items-center gap-x-2 mt-2">
            <button
              className={`p-2 rounded-lg  text-white drop-shadow ${
                quantity === 1 ? "bg-slate-400" : "bg-slate-600"
              }`}
              disabled={quantity === 1}
              onClick={decrementQuantity}
            >
              <AiOutlineMinus className="w-[1rem] h-[1rem]" />
            </button>
            <span className="font-bold drop-shadow">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className={`p-2 rounded-lg drop-shadow  text-white ${
                quantity === 10 ? "bg-slate-400" : "bg-slate-600"
              }`}
              disabled={quantity === 10}
            >
              <AiOutlinePlus className="w-[1rem] h-[1rem]" />
            </button>
          </div>
          <button
            onClick={addTocartHandler}
            className="main-btn block w-[max-content] bg-slate-800 text-white md:text-[1.3rem]  secondary-heading rounded-lg px-6 py-2 mt-4 shadow-lg shadow-neutral-500/50 hover:bg-slate-700 hover:scale-[1.01] hover:-translate-y-[.2rem] transition-all duration-200 ease-in-out"
          >
            Add To Cart
          </button>
        </div>
        <p className="capitalize text-green-600 drop-shadow font-bold text-lg ">
          in stock
        </p>
        <div className="w-11/12">
          <div
            className="flex items-center justify-between  bg-gray-100 shadow-lg rounded-lg mt-4 p-2 cursor-pointer "
            onClick={toggleShowingDescription}
          >
            <p className="text-xl font-bold">Product Overview</p>

            <SlArrowDown
              className={`w-[1.5rem] h-[1.5rem] ${
                showDescription && "rotate-180"
              }`}
            />
          </div>
          {showDescription && (
            <p className="bg-gray-50 p-2 text-sm md:text-basic rounded-b-lg shadow-lg">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
