import React from "react";
import { VscClose } from "react-icons/vsc";

const ModelCloseButton = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <button
      onClick={handleClose}
      className="bg-white absolute top-3 right-3 rounded-full p-2"
    >
      <VscClose />
    </button>
  );
};

export default ModelCloseButton;
