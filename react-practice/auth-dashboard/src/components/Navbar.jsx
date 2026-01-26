import React from "react";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    window.location.href = "/login";
  };
  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Auth Dashboard</h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
