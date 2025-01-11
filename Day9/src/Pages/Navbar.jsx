import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>
      <button onClick={toggleTheme}> hello {theme} </button>
    </div>
  );
};

export default Navbar;
