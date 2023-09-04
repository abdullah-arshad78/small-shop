import React, { useState, useEffect } from "react";
import { json, useLoaderData, useSearchParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { BsFilter } from "react-icons/bs";

const ProductsPage = () => {
  const data = useLoaderData();
  const [showFilters, setShowFilters] = useState(false);
  const toggleShowFiltersHandler = () => setShowFilters((prev) => !prev);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortByDes = searchParams.get("sort") === "des";
  const sortByCategory = searchParams.get("category");
  const categoriesProducts = data.filter((product) => {
    if (!sortByCategory || sortByCategory === "all") {
      return product;
    }
    return product.category === sortByCategory;
  });
  const sortHandler = (e) => {
    searchParams.set(e.target.name, e.target.value);
    setSearchParams(searchParams);
  };

  const sortedProducts = categoriesProducts.sort((a, b) => {
    if (sortByDes) {
      return b.price - a.price;
    }
    return a.price - b.price;
  });
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const selectContainers = (
    <div>
      <div
        className={`cursor-pointer w-[max-content] p-1 rounded-full flex items-center justify-center ${
          showFilters ? "bg-slate-800" : ""
        }`}
        onClick={toggleShowFiltersHandler}
      >
        <BsFilter
          className={`h-[2rem] w-[2rem] ${showFilters && "fill-white"}`}
        />
      </div>
      {showFilters && (
        <div className={`flex w-full py-2 px-1 items-center justify-between`}>
          <div className="flex flex-col md:flex-row items-center text-sm md:text-basic">
            <label className="font-bold mr-2">Sort By Price</label>
            <select
              name="sort"
              className="rounded-lg p-1 outline-none border-2 border-slate-600"
              onChange={sortHandler}
              defaultValue="asc"
            >
              <option value="asc">Low To High</option>
              <option value="des">High To Low</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row items-center text-sm md:text-basic">
            <label className="font-bold mr-2">Sort By Category</label>
            <select
              name="category"
              className="rounded-lg p-1 outline-none border-2 border-slate-600"
              onChange={sortHandler}
              defaultValue="all"
            >
              <option value="all">All</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
  const productContent = sortedProducts.map((product) => (
    <ProductItem key={product.id} {...product} />
  ));
  return (
    <div className="product-page-bg pt-[7rem] px-[2rem]">
      {selectContainers}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row auto-rows-fr gap-6">
        {productContent}
      </div>
    </div>
  );
};

export default ProductsPage;

export const getProductsLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw json({ message: "Could not load products" }, { status: 500 });
  }
  return response;
};
