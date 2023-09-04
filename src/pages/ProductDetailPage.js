import React, { Suspense, useEffect } from "react";
import { Await, defer, useLoaderData, json } from "react-router-dom";
import Loader from "../UI/Loader";
import SingleProduct from "../components/SingleProduct";

const ProductDetailPage = () => {
  const data = useLoaderData();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            <Loader />
          </div>
        }
      >
        <Await resolve={data.productData}>
          {(loadContent) => <SingleProduct product={loadContent} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

const getSingleProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw json({ status: 500 }, { message: "Could not fetch the product" });
  }
  return data;
};

export const singleProductLoader = ({ params }) => {
  const { productId } = params;
  return defer({ productData: getSingleProduct(productId) });
};
