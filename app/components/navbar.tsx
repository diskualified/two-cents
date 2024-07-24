import React from "react";

const Navbar = () => {
  return (
    <header className="sticky flex bg-rose-950 text-white top-0 backdrop-filter backdrop-blur-lg border-b bg-opacity-30 border-gray-200 flex-row items-center justify-between mx-auto p-4 z-10">
      <div className="text-3xl">
        <a href="/">&cent;&cent;</a>
      </div>
      <div className="space-x-12">
        <a href="/about">About</a>
        <a href="/works">Work</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
