import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const res = await axios.get("https://fakestoreapi.com/products");
    //   console.log(res.data);
    //   setProducts(res.data);
    // };
    // fetchProducts();
  }, []);



  const handleAdd=(product)=>{
        dispatch(addToCart(product))
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={()=>handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
