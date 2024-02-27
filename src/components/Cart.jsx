import React from "react";
import { useSelector } from "react-redux";
import style from "../modules/Cart.module.css";
import { openCart, removeItem } from "../redux/slices/products";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Products.cart);
  console.log(cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(0);

  const cartBool = useSelector((state) => state.Products.cartOpen);
  const handleclick = () => {
    dispatch(openCart(!cartBool));
  };
  return (
    <div
      id="cart"
      className={style.cart}
      style={{ right: cartBool ? "0px" : "-400px" }}
    >
      <div style={{ display: "flex", justifyContent: "end" }}>
        <h3 onClick={handleclick} className={style.closebtn}>
          {" "}
          X
        </h3>
      </div>

      <div className={style.cartHeader}>
        <h2>Shopping Cart</h2>
        <h2>
          Total : <span>{total}$</span>
        </h2>
      </div>
      <div className={style.cartProducts}>
        {cart.map((product) => (
          <div key={product.id} className={style.product}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                margin: "0 15px 0 0",
              }}
            >
              <h3
                onClick={() => dispatch(removeItem(product.id))}
                className={style.closebtns}
              >
                X
              </h3>
            </div>
            <img
              style={{
                width: "200px",
                height: "200px",
                mixBlendMode: "multiply",
              }}
              src={product.image}
              alt="product"
            />
            <h4 style={{ textAlign: "center" }}>
              Name : <span style={{ fontSize: "12px" }}>{product.title}</span>
            </h4>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              Price : {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
