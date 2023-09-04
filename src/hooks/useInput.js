import { useState } from "react";

const useInput = (validateFn) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);
  const valueIsValid = validateFn(value);
  const valueHasError = !valueIsValid && valueTouched;
  const blurHandler = () => {
    setValueTouched(true);
  };
  const valueChangeHandler = (e) => setValue(e.target.value);
  const resetValue = () => {
    setValue("");
    setValueTouched(false);
  };

  return {
    value,
    valueHasError,
    valueChangeHandler,
    blurHandler,
    valueIsValid,
    resetValue,
  };
};

export default useInput;
