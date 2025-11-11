import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col justify-start">
      <Navbar />
      <div className="p-2 flex-1 flex bg-black">
        <div className="min-w-36 border bg-white/70">left</div>
        <div className="bg-yellow-500 border p-2 flex-1">{children}</div>
        <div className="min-w-36 border bg-white/70">right</div>
      </div>
      <footer className="bg-red-600 min-h-10">footer content</footer>
    </div>
  );
};

export default Layout;
