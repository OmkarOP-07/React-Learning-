import React from "react";
import { useEffect } from "react";
const Navbar = ({ color }) => {
  // Run on every page load 
  useEffect(() => {
    alert("Welcome to my profile");
  });

  // case 2: Run only one first render
  useEffect(() => {
    alert("First Render occurred of navbar");
  }, []);
  // case 3: Run only when certain value change 
  useEffect(() => {
    alert("color is changed");
  }, [color]);

  return <div>Hey this is a navbar of color - {color}</div>;
};

export default Navbar;
