import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  const navigate = useNavigate();

  const makePayment = async () => {
    alert("Payment Done");
    navigate("/");
    removeFromCart(
      
    )
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div key={e.id}>
            <div className="cartitems-format-main cartitems-format">
              <img className="cartitems-product-icon" src={e.image} alt="" />
              <p className="product-title">{e.name}</p>
              <p>₹{e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>₹{e.new_price*cartItems[e.id]}</p>
              <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
            </div>
            <hr />
          </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1 style={{color: "whitesmoke"}}>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p style={{color: "whitesmoke"}}>Subtotal</p>
              <p style={{color: "whitesmoke"}}>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p style={{color: "whitesmoke"}}>Shipping Fee</p>
              <p style={{color: "whitesmoke"}}>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3 style={{color: "whitesmoke"}}>Total</h3>
              <h3 style={{color: "whitesmoke"}}>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={makePayment}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p style={{color: "whitesmoke"}}>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
