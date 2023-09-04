import React, { useEffect } from "react";
import HomeSection from "../components/HomeSection";
import FreeShippingContainer from "../components/FreeShippingContainer";
import AboutSection from "../components/AboutSection";
import TrendingProducts from "../components/TrendingProducts";
import { json, defer } from "react-router-dom";
import Reviews from "../components/Reviews";

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeSection />
      <FreeShippingContainer />
      <AboutSection />
      <TrendingProducts />
      <Reviews />
    </>
  );
};

export default HomePage;
const loadTrendingProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=6");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch the trending products" },
      { status: 500 }
    );
  }
  const data = await response.json();

  return data;
};

export const trendingProductsLoader = async () => {
  return defer({ trendingProducts: await loadTrendingProducts() });
};
