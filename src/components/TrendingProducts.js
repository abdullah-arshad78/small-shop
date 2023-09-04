import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import ProductItem from "./ProductItem";

const TrendingProducts = () => {
  const { trendingProducts } = useLoaderData();

  const trendingProductsItems = trendingProducts.map((product) => (
    <ProductItem {...product} />
  ));
  return (
    <div className="px-6 md:px-[5rem] py-[6rem] bg-red-400 bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100">
      <h2 className="secondary-heading text-center lg:text-left text-[1.3rem] md:text-3xl text-slate-600">
        Our Trending Products
      </h2>
      <div className="relative">
        <Link
          to="products"
          className="secondary-heading absolute top-0 right-0 p-2 rounded-lg hover:bg-slate-400"
        >
          See All
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row grid-rows-fr gap-y-4 gap-x-4 lg:gap-x-[2rem]  py-[3rem] text-center">
          {trendingProductsItems}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
