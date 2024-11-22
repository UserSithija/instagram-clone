import Image from "next/image";
import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import CommentList from "./CommentList";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { AiOutlineSend } from "react-icons/ai";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ArrowButton from "./ArrowButton";
import ModelCloseButton from "./ModelCloseButton";

const PostModel = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="bg-black absolute bg-opacity-50 h-screen w-full top-0 left-0 flex justify-center items-center gap-4">
      {/* close button */}
      <ModelCloseButton handleClose={handleClose} />
      {/* left arrow */}
      <ArrowButton type="leftArrow" />
      {/* model */}
      <div className="relative bg-white w-[70%]  rounded-md flex flex-col md:flex-row">
        {/* image */}
        <div className=" relative  h-96 md:w-full md:h-[500px] lg:w-2/3 xl:w-full xl:h-[600px]">
          <Image
            src="https://images.pexels.com/photos/27914244/pexels-photo-27914244/free-photo-of-a-woman-sitting-on-the-stairs-with-her-hand-on-her-hip.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-t-lg md:rounded-l-md "
          />
        </div>
        <div className="w-full ">
          {/* profile info */}
          <div className="p-4 flex justify-between items-center md:h-[15%] ">
            <div className="flex gap-3 items-center">
              <Image
                src="https://images.pexels.com/photos/29288524/pexels-photo-29288524/free-photo-of-black-and-white-portrait-on-antibes-rocks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full ring-4 hidden md:block"
              />
              <span className="text-md md:text-lg font-semibold ">janedoe</span>
            </div>

            <TfiMoreAlt />
          </div>
          <hr className="bg-gray-400" />
          {/* comments */}
          <div className="hidden md:block md:h-[65%] bg-gray-100 ">
            <CommentList />
          </div>
          {/* add a comment */}
          <div className="p-4 md:h-[20%] ">
            <div className=" flex justify-evenly">
              <FaRegHeart />
              <FaRegComment />
              <IoPaperPlaneOutline />
              <LuDownload />
            </div>
            {/* input */}
            <div className="hidden md:flex w-full ring-2 ring-gray-300 mt-4 rounded-lg px-2">
              <input
                type="text"
                placeholder="add a comment"
                className=" w-[95%]  py-2 px-4 rounded-lg  "
              />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* right arrow */}
      <ArrowButton type="rightArrow" />
    </div>
  );
};

export default PostModel;
