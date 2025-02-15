"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full display-none flex sm:flex items-center justify-between sm:justify-between px-6 py-8 bg-white border-b-2">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold ml-2">WhatBytes</h1>
      </div>

      <div className="sm:flex sm:items-center sm:justify-center space-x-1 border-gray-100 border-2 px-4 py-2 rounded-lg cursor-pointer hidden">
        <Image
          src="/images/user.png"
          alt="User Profile"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="text-lg font-bold">Rahil Siddique</span>
      </div>
    </nav>
  );
};

export default Navbar;
