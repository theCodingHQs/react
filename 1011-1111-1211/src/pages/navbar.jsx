import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("....1");
    console.log("....2");
    console.log("....3");
    navigate("/login");
  };
  return (
    <div className="bg-indigo-600 sticky  top-0 left-0 w-full h-[10vh] flex items-center justify-between px-10 text-white">
      <div className="text-4xl">Logo </div>
      <ul className="flex gap-3">
        <li className="border px-4 rounded text-sm">
          <Link to="/">Home</Link>
        </li>
        <li className="border px-4 rounded text-sm">
          <Link to="/users">Users</Link>
        </li>
        <li className="border px-4 rounded text-sm">Services</li>
        <li className="border px-4 rounded text-sm bg-red-400">
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
      <div>User</div>
    </div>
  );
};

export default Navbar;
