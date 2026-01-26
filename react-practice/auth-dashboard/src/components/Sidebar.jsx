import React from "react";
import { Link } from "react-router-dom";
import Users from "../pages/Users";
const Sidebar = () => {
  return (
    <div className="w-56 text-white bg-gray-500 p-4 min-h-screen">
      <h2 className="font-bold text-xl mb-6">Menu</h2>
      <ul className="space-y-3">
        <li>
          <Link
            part="/dashboard"
            className=" block p-2 rounded  hover:bg-gray-700"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <button className="block p-2 w-full text-left rounded hover:bg-gray-700">
            User
          </button>
        </li>
        <li>
          <button className="block p-2 w-full text-left rounded hover:bg-gray-700">
            Setting
          </button>
        </li>
        <Link to="/users" className="block p-2 rounded hover:bg-gray-700">
          Users
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
