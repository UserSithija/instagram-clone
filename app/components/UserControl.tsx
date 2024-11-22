"use client";
import { SignOutButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { TfiMoreAlt } from "react-icons/tfi";

const UserControl = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <TfiMoreAlt />
      </button>
      {open && (
        <div className="absolute  flex flex-col gap-2   right-4 bg-white min-w-40 p-3 shadow-xl rounded-lg">
          <SignOutButton>
            <button className="text-red-500">Sign out</button>
          </SignOutButton>

          <hr />
          <button>info</button>
          <hr />
          <button>update profile</button>
          <hr />
        </div>
      )}
    </div>
  );
};

export default UserControl;
