"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-8 bg-white shadow border">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold ml-2">WhatBytes</h1>
      </div>

      <div className="flex items-center justify-center space-x-1 border-gray-100 border-2 px-4 py-2 rounded-lg cursor-pointer">
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
