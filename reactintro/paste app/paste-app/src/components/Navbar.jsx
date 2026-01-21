import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-3 mt-4 place-content-evenly ">
      <NavLink to="/">Navbar</NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </div>
  );
};

export default Navbar;
