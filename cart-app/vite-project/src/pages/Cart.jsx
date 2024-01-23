import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

function Cart() {
 const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId)=>{
      dispatch(removeFromCart(productId))
  }

  return (
    <div>
      <h2>Cart Products</h2>

      {products.map((product) => {
        return (
          <div key={product.id} className="cartCard">
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={()=>handleRemove(product.id)} className="btn">Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
