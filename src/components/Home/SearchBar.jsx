import { useState } from "react";
import random from "../../assets/images/quiz.jpg";

export default function SearchBar() {
  const [focusBox, setFocusBox] = useState(false);
  const focusHandler = () => {
    setFocusBox(!focusBox);
  };

  return (
    <div className="relative z-40">
      <input
        type="text"
        placeholder="Search by Funds, Consortium, category"
        onFocus={focusHandler}
        onBlur={focusHandler}
        className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
      />
      