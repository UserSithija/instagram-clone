import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const CommentList = () => {
  return (
    <div className="  flex flex-col w-full p-4">
      <div className="bg-white  rounded-lg p-2 ">
        {/* profile info */}
        <div className="flex gap-3 items-center">
          <Image
            src="https://images.pexels.com/photos/29288524/pexels-photo-29288524/free-photo-of-black-and-white-portrait-on-antibes-rocks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full "
          />
          <span className="text-sm font-semibold ">janedoe</span>
        </div>
        <div className="pl-7 ">
          <div className="flex justify-between p-2">
            <p className=" text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </p>
            <FaRegHeart />
          </div>
          <div className="flex gap-4">
            {/* likes */}
            <div
              className="flex items-center gap-2
            "
            >
              <p className="text-xs text-gray-700 font-semibold">
                23 <span>likes</span>
              </p>
            </div>
            {/* replys */}
            <div
              className="flex items-center gap-2
            "
            >
              <p className="text-xs text-gray-700 font-semibold">reply</p>
            </div>
          </div>
          {/* view replies */}
          <p className="text-sm text-gray-800 mt-2">
            view <span className="text-sm">8</span> replies
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
