import React, { useState, useEffect } from "react";
import style from "../modules/Landing.module.css";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../redux/slices/products";
const LandingPage = () => {
  const disatch = useDispatch();
  const cartBool = useSelector((state) => state.Products.cartOpen);
  const handleclick = () => {
    disatch(openCart(!cartBool));
  };
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    setHeight(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className={style.Background} id="home">
      <nav className={style.nav}>
        <ul
          className={style.navul}
          style={{
            background: height > 100 ? "#d3c9c9" : "transparent",
            color: height > 100 ? "purple" : "white",
          }}
        >
          <li>
            <a
              style={{
                background: height > 100 ? "#d3c9c9" : "transparent",
                color: height > 100 ? "purple" : "white",
              }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{
                background: height > 100 ? "#d3c9c9" : "transparent",
                color: height > 100 ? "purple" : "white",
              }}
              href="#products"
            >
              Products
            </a>
          </li>
          <li>
            <a
              style={{
                background: height > 100 ? "#d3c9c9" : "transparent",
                color: height > 100 ? "purple" : "white",
              }}
              href="#footer"
            >
              Contact
            </a>
          </li>
          <li onClick={handleclick}>
            <a
              style={{
                background: height > 100 ? "#d3c9c9" : "transparent",
                color: height > 100 ? "purple" : "white",
              }}
              href="#"
            >
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
