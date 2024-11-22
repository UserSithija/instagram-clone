"use client";
import PostCard from "@/app/components/PostCard";
import PostModel from "@/app/components/PostModel";
import React, { useState } from "react";

const Feed = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-wrap ">
      <PostCard handleOpen={handleOpen} />

      {open && <PostModel handleClose={handleClose} />}
    </div>
  );
};

export default Feed;
