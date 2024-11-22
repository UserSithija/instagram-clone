import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const Post = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4">
      {/* profile */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28957752/pexels-photo-28957752/free-photo-of-young-woman-enjoys-summer-with-fresh-oranges.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="pro-pic"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full ring-2 ring-pink-600"
        />
        <div className="flex flex-col">
          <div className="flex gap-2 font-semibold">
            <span>janedoe</span>
            <Link
              href="/"
              className="text-blue-500  hover:underline
            "
            >
              Follow
            </Link>
          </div>
          <span className="text-xs font-semibold">Taif,Saudi Arabia</span>
        </div>
      </div>
      {/* image */}
      <div className="relative w-full h-[350px] lg:h-[500px]">
        <Image
          src="https://images.pexels.com/photos/28833016/pexels-photo-28833016/free-photo-of-autumn-path-with-fallen-leaves-in-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      {/* buttons  */}
      <div className=" flex justify-evenly py-2 cursor-pointer">
        <FaRegHeart />
        <FaRegComment />
        <IoPaperPlaneOutline />
        <LuDownload />
      </div>
      {/* desc */}
      <div className="">
        <span className="font-semibold ">500 likes</span>
        <p className="line-clamp-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          aspernatur distinctio iure{" "}
        </p>
        <p className="text-gray-400 text-sm cursor-pointer hover:underline">
          View all 30 comments
        </p>
      </div>
    </div>
  );
};

export default Post;
