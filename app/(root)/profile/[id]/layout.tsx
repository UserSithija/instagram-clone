import Button from "@/app/components/Button";
import ProfileNavbar from "@/app/components/ProfileNavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";
import { GoTag, GoVideo } from "react-icons/go";
import { MdOutlineGridOn, MdRssFeed } from "react-icons/md";
import { TfiMoreAlt } from "react-icons/tfi";

export default async function ProfileLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const { id } = await params;

  return (
    <div className=" flex flex-col gap-4  ">
      {/* TOP */}
      <div className="h-[25%] ">
        {/* Profile info */}
        <div className="h-[75%] bg-white rounded-t-lg md:rounded-lg md:shadow-md ">
          {/* profile pic */}
          <div className="p-2  md:p-8 flex ">
            <div className="relative w-20 h-20  md:w-40   md:h-40 ">
              <Image
                src="https://images.pexels.com/photos/29288524/pexels-photo-29288524/free-photo-of-black-and-white-portrait-on-antibes-rocks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                fill
                className=" rounded-full ring-4 object-cover "
                alt="profile pic"
              />
            </div>
            {/* info */}
            <div className="ml-10 md:ml-20 lg:ml-28 flex flex-col gap-4 ">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex items-center gap-5">
                  <h1 className="font-semibold tracking-wide text-xl">
                    janedoe
                  </h1>
                  <TfiMoreAlt />
                </div>

                <div className="flex gap-4">
                  <Button type="follow" name="follow" />
                  <Button type="message" name="message" />
                </div>
              </div>
              <div className=" hidden md:flex justify-between  gap-3">
                {/* posts */}
                <div className="flex gap-2 ">
                  <span className="font-bold">152</span>
                  <span>posts</span>
                </div>
                {/* posts */}
                <div className="flex gap-2 ">
                  <span className="font-bold">152</span>
                  <span>followers</span>
                </div>
                {/* posts */}
                <div className="flex gap-2 ">
                  <span className="font-bold">152</span>
                  <span>following</span>
                </div>
              </div>
              {/* lg bio */}
              <div className="hidden md:block">
                {/* first name */}
                <h2 className="font-semibold uppercase tracking-widest">
                  janedoe
                </h2>
                {/* desc */}
                <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          {/* bio */}
          <div className="p-3 md:hidden">
            {/* first name */}
            <h2 className="font-semibold uppercase tracking-widest">janedoe</h2>
            {/* desc */}
            <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <hr className="bg-gray-200" />
        <div className="h-[25%] flex  justify-evenly p-3  bg-white rounded-b-md shadow-md md:hidden ">
          {/* posts */}
          <div className="flex flex-col items-center ">
            <span className="font-semibold">152</span>
            <span className="text-gray-500">posts</span>
          </div>
          {/* followers */}
          <div className="flex flex-col items-center">
            <span className="font-semibold">9.5M</span>
            <span className="text-gray-500">followers</span>
          </div>
          {/* following */}
          <div className="flex flex-col items-center">
            <span className="font-semibold">150</span>
            <span className="text-gray-500">following</span>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="w-full h-[75%] bg-white  p-4 rounded-lg shadow-md ">
        <div className="md:px-[10%] lg:px-[15%]">
          <ProfileNavbar id={id!} />
          {children}
        </div>
      </div>
    </div>
  );
}
