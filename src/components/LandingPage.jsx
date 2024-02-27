import React, { useState, useEffect } from "react";
import style from "../modules/Landing.module.css";

const LandingPage = () => {
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    console.log(height);
    setHeight(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <nav className={style.nav}>
        <ul
          className={style.navul}
          style={{
            background: height > 100 ? "black" : "transparent",
          }}
        >
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
          <li>More</li>
        </ul>
      </nav>
    </>
  );
};

export default LandingPage;
