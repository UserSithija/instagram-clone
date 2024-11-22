"use client";
import Image from "next/image";
import React from "react";
import PostModel from "./PostModel";

const PostCard = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <>
      <div
        onClick={handleOpen}
        className="
         w-1/4
         h-36
         md:w-1/3
         md:h-64
         lg:h-72
         xl:w-1/4
         relative
         cursor-pointer
         "
      >
        <Image
          src="https://images.pexels.com/photos/27914244/pexels-photo-27914244/free-photo-of-a-woman-sitting-on-the-stairs-with-her-hand-on-her-hip.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="post-img"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
};

export default PostCard;
