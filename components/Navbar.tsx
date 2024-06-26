import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white text-[45px]">
        Erkhan Adenov <span className="font-thin">GaLLiFrey</span>
        <span className="text-red-500">.</span>
      </h1>
      
    </div>
  );
};

export default Navbar;
