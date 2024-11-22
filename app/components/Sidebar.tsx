import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaThreads } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { RiVideoLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlHome } from "react-icons/sl";
import { TbMessageCircle, TbSearch } from "react-icons/tb";

const Sidebar = () => {
  const id = 2;
  const sidebarLinks = [
    {
      id: "top",
      items: [
        {
          id: 0,
          name: "home",
          path: "/",
          icon: <SlHome />,
        },
        {
          id: 1,
          name: "explore",
          path: "/",
          icon: <TbSearch />,
        },
        {
          id: 2,
          name: "reels",
          path: "/",
          icon: <RiVideoLine />,
        },
        {
          id: 3,
          name: "message",
          path: "/",
          icon: <TbMessageCircle />,
        },
        {
          id: 4,
          name: "notifications",
          path: "/",
          icon: <AiOutlineHeart />,
        },
        {
          id: 5,
          name: "profile",
          path: `/profile/${id}/posts`,
          icon: <GoPerson />,
        },
      ],
    },
    {
      id: "bottom",
      items: [
        {
          id: 1,
          name: "threads",
          path: "/",
          icon: <FaThreads />,
        },
        {
          id: 2,
          name: "more",
          path: "/",
          icon: <RxHamburgerMenu />,
        },
      ],
    },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-16">
      {sidebarLinks.map((i) => {
        return (
          <div
            key={i.id}
            className="flex flex-col items-center gap-12 pt-14 text-lg lg:items-start lg:pl-8"
          >
            {i.items.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="flex gap-4 items-center lg:hover:bg-gray-100 lg:w-full lg:p-2 rounded-lg duration-300 ease-in-out transition"
              >
                {link.icon}
                <span className="hidden lg:block">{link.name}</span>
              </Link>
            ))}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
