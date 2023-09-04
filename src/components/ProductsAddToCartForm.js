import React, { useState } from "react";

const ProductsAddToCartForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [amountError, setAmountError] = useState(false);
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      setAmountError(true);
      return;
    } else {
      setAmountError(false);
      props.onAddToCart(parseInt(amount));
    }
    return;
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center space-x-2"
      >
        <label className="text-sm font-bold drop-shadow">Quantity</label>
        <input
          className="w-[3rem] p-1 border-2 border-slate-600 rounded-lg drop-shadow-lg"
          type="number"
          defaultValue={amount}
          // min={1}
          onChange={amountChangeHandler}
        />
        <button className=" text-sm main-btn block w-[max-content] bg-slate-800 text-white secondary-heading rounded-lg px-2 py-1  shadow-lg shadow-neutral-500/50 hover:bg-slate-700 hover:scale-[1.01] hover:-translate-y-[.2rem] transition-all duration-200 ease-in-out ">
          {" "}
          Add To Cart
        </button>
      </form>
      {amountError && (
        <p className="text-red-500 text-sm font-bold drop-shadow mt-2">
          Please select an amount to add
        </p>
      )}
    </>
  );
};

export default ProductsAddToCartForm;
