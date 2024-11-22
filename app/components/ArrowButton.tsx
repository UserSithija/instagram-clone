import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ArrowButton = ({ type }: { type: "leftArrow" | "rightArrow" }) => {
  return (
    <button className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
      {type === "leftArrow" ? <GoArrowLeft /> : <GoArrowRight />}
    </button>
  );
};

export default ArrowButton;
