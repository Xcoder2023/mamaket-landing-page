import React from "react";
import "./Cart.css";
import cart from "../../assets/cart-imge/Group.png";

const Cart = () => {
  return (
    <div>
      <div className="cart-central">
        <div className="left-cart">
          <div className="diverse-selection">
            <h3>Diverse Selection of product and services</h3>
            <p>
              We offer a wide range of African products and services from
              trusted brands and vendors in the US. As a seller you can upload
              used and new products that Africans enjoy.
            </p>
          </div>
          <div className="free-shopping">
            <h3>Hassle-free shopping experience</h3>
            <p>
              Shopping in our platform is easy and user-friendly. Using our
              chatting system, you can communicate with sellers and negotiate
              prices in a safe and secure environment.
            </p>
          </div>
        </div>
        <div className="cart-centre">
          <img src={cart} alt="cart-img" />
        </div>
        <div className="right-cart">
          <div className="payment">
            <h3>Secured payment platform</h3>
            <p>With Mamapurse, our e-wallet system, both buyers and sellers don’t need credit or debit cards to have a safe and secure transaction process and a transparent return and exchange policy, so you can shop with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
