import React, { Suspense } from "react";
import { Await, useLoaderData, Link } from "react-router-dom";

const CategoriesHeaderContainer = (props) => {
  const categories = useLoaderData();

  const categoriesContent = categories.map((category) => (
    <li
      key={category}
      className="categories-list-item border-b-2 border-gray-300 w-full py-2"
    >
      <Link to={`/products?category=${category}`}> {category}</Link>
    </li>
  ));
  return (
    <ul
      onMouseLeave={props.onMouseLeave}
      className="absolute bottom-[-12rem] left-0 text-gray-600 capitalize bg-gray-100 px-6 py-2 rounded-lg flex flex-col justify-center items-start w-[max-content] shadow-lg"
    >
      {categoriesContent}
    </ul>
  );
};

export default CategoriesHeaderContainer;

export const categoriesLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  return response;
};
