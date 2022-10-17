import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="font-Poppins text-xl font-bold text-blue-900 md:text-2xl">
        Fastly
      </div>
      <div className="flex space-x-2 md:space-x-5">
        <a href="#" className="font-Poppins text-gray-900 md:text-xl font-medium">
          About
        </a>
        <a href="#" className="font-Poppins text-gray-900 md:text-xl font-medium">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
