import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-2">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/test"}>Test</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
