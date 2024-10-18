import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="mb-10 flex mt-2  gap-10 justify-center">
        <li className="hover:text-gray-800 hover:bg-gray-300 font-mono  font-semibold text-4xl text-white sm:border-[#e2797948] sm:border rounded-md py-1 px-5">
          <Link href={"/"}>Home</Link>       
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
