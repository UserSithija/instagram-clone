import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Button = ({
  type,
  name,
}: {
  type: "follow" | "message";
  name: string;
}) => {
  return (
    <button className="py-1 px-4 flex gap-2 items-center bg-gray-200  font-semibold   rounded-lg">
      {name} {type === "follow" ? <IoIosArrowDown /> : null}
    </button>
  );
};

export default Button;
