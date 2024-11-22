import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { RiVideoLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { TbMessageCircle, TbSearch } from "react-icons/tb";

const Navbar = () => {
  const id = 2;
  const navLinks = [
    {
      id: 0,
      path: "/",
      icon: <SlHome />,
    },
    {
      id: 1,

      path: "/",
      icon: <TbSearch />,
    },
    {
      id: 2,
      path: "/",
      icon: <RiVideoLine />,
    },
    {
      id: 3,

      path: "/",
      icon: <TbMessageCircle />,
    },
    {
      id: 5,

      path: `/profile/${id}/posts`,
      icon: <GoPerson />,
    },
  ];

  return (
    <nav className="flex justify-evenly py-5 items-center">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.path} className="text-xl ">
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
