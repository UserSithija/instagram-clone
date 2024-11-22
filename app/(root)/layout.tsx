import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      <div className="flex">
        {/* left */}
        <div className=" h-screen md:w-[7%]  lg:w-[25%]  xl:w-[20%] ">
          <Sidebar />
        </div>
        {/* right */}
        <div className="bg-slate-100 h-screen  p-4 w-full md:w-[93%] lg:w-[75%] xl:w-[80%]    overflow-scroll">
          {children}
        </div>
        {/* bottom */}
      </div>
      <div className="w-full fixed bottom-0 bg-white  h-16 md:hidden">
        <Navbar />
      </div>
    </div>
  );
}
