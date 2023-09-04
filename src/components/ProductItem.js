import React from "react";
import { Rating } from "react-simple-star-rating";
import ProductsAddToCartForm from "./ProductsAddToCartForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
const ProductItem = ({ title, price, category, image, rating, id }) => {
  const dispatch = useDispatch();
  const addTocartHandler = (quantity) => {
    dispatch(cartActions.addToCart({ title, quantity, id, price }));
  };
  return (
    <div className="flex flex-col items-center justify-start  my-2">
      <Link
        to={`/products/${id}`}
        className="relative hover:scale-95 transition duration-200 ease-in"
      >
        <img
          src={image}
          alt={title}
          className="h-[15rem] lg:h-[20rem] xl:h-[25rem] rounded-lg product-img-shadow w-full relative"
        ></img>
        <span className="absolute top-0 right-0 p-1 rounded-lg bg-cyan-900 opacity-70 text-white capitalize font-bold">
          {category}
        </span>
      </Link>
      <h2 className="secondary-heading text-center md:text-lg bg-gradient-to-r from-slate-900 to-cyan-900 bg-clip-text text-transparent drop-shadow-lg mt-2 h-[60%] md:h-full">
        {title}
      </h2>
      <div className="w-full flex items-center justify-center">
        <Rating
          readonly={true}
          initialValue={rating.rate}
          size={25}
          fillColor="#025464"
        />
        <span>({rating.count})</span>
      </div>
      <span className="text-black font-bold drop-shadow-sm text-xl">
        ${price}
      </span>
      {/* <span className="absolute top-0 right-0 p-1 rounded-lg bg-cyan-900 opacity-70 text-white capitalize font-bold">
        {category}
      </span> */}
      <ProductsAddToCartForm onAddToCart={addTocartHandler} />
    </div>
  );
};

export default ProductItem;
