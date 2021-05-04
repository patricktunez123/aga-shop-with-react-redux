import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeProduct } from "../redux/actions/setProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const fetchSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchSingleProduct();
    return () => {
      dispatch(removeProduct());
    };
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        "Loading..."
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.payload.image} />
              </div>
              <div className="column rp">
                <h1>{product.payload.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.payload.price}</a>
                </h2>
                <h3 className="ui brown block header">
                  {product.payload.category}
                </h3>
                <p>{product.payload.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
