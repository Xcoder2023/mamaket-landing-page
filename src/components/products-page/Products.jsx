import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products-container">
            <div className="products">
                <p>Products</p>
            </div>
            <div className="products-display">
                <div className="paw-clothes">
                        <div className="paw-paw"></div>
                        <div className="clothes-patotoes">
                        <div className="clothes"></div>
                        <div className="patotoes"></div>
                        </div>
                </div>
                <div className="veges-bids">
                        <div className="veges"></div>
                        <div className="bids"></div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Products;
