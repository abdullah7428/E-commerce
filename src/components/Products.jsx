import React, { useEffect, useState } from "react";
import style from "../modules/Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/products";
import { addToCart } from "../redux/slices/products";
const Products = () => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector((state) => state.Products.data);
  console.log(products);
  const [prdata, setPrData] = useState([]);
  useEffect(() => {
    setPrData(products);
  }, [products]);
  function sortA() {
    setPrData([...products].sort((a, b) => a.price - b.price));
  }
  function sortD() {
    setPrData([...products].sort((a, b) => b.price - a.price));
  }
  return (
    <div className={style.Main}>
      <h4>
        <span onClick={() => setModal(!modal)}>Sort</span>
        <span>
          <ul
            style={{
              background: "#d3c9c9",
              width: "250px",
              zIndex: "11111",
              height: "200px",
              position: "absolute",
              textAlign: "center",
              margin: "auto",
              display: modal ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              transition: "1s ease all",
              flexDirection:"column",
              gap:"20px",
              listStyle:"none"
            }}
          >
            <li onClick={sortA}> Price Low To High</li>
            <li onClick={sortD}> Price High To Low</li>
            <li onClick={() => setPrData(products)}>clear</li>
          </ul>
        </span>
      </h4>
      <h3>Our Products</h3>
      <div className={style.ProductContainer}>
        {prdata.map((product) => (
          <>
            <div className={style.Card}>
              <div key={product._id} className={style.cardinner}>
                <div className={style.cardfront}>
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={product.image}
                    alt="product"
                  />
                  <h4 style={{ textAlign: "center" }}>
                    Name :{" "}
                    <span style={{ fontSize: "12px" }}>{product.title}</span>
                  </h4>
                  <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    Price : {product.price}$
                  </p>
                </div>
                <div className={style.Back}>
                  <h3 style={{ width: "222px", fontSize: "10px" }}>
                    {product.description.split(0, 50)}
                  </h3>
                  <button onClick={() => dispatch(addToCart(product))}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
