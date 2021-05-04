import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axois from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/actions/setProducts";

const Product = () => {
  const products = useSelector((state) => state.products.products);
  const despatch = useDispatch();
  // const { id, name, price } = products[0];

  const fetchAllProducts = async () => {
    const response = await axois
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("There was an error:", err));
    despatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchAllProducts();
  });

  const productList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ui grid" key={id}>
        <Link to={`product/${id}`}>
          <div className="four column wide">
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">${price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{productList}</>;
};

export default Product;
