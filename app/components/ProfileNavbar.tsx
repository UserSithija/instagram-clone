"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoTag, GoVideo } from "react-icons/go";
import { MdOutlineGridOn, MdRssFeed } from "react-icons/md";

const ProfileNavbar = ({ id }: { id: string }) => {
  const pathname = usePathname();
  const links = [
    {
      id: 0,
      path: `/profile/${id}/posts`,
      name: "posts",
      icon: <MdOutlineGridOn />,
    },
    {
      id: 1,
      path: `/profile/${id}/feed`,
      name: "feed",
      icon: <MdRssFeed />,
    },
    {
      id: 2,
      path: `/profile/${id}/reels`,
      name: "reels",
      icon: <GoVideo />,
    },
    {
      id: 3,
      path: `/profile/${id}/tagged`,
      name: "tagged",
      icon: <GoTag />,
    },
  ];

  function isActive(pathname: string, link: string): boolean {
    return pathname === link || pathname.startsWith(link);
  }

  return (
    <nav className=" pb-2">
      <div className="flex justify-evenly  ">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={` flex items-center gap-2 justify-center`}
          >
            {link.icon}
            <span
              className={`${
                isActive(pathname, link.path) ? "font-semibold" : ""
              } hidden md:block`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default ProfileNavbar;
