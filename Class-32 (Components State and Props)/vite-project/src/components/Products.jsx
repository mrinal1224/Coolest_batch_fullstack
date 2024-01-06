import React from "react";

function Products() {
  //  let products = ['Laptops' , 'Headphones' , 'Mouse' , 'Keyboard' , "Laptops"]

  let productsObjects = [
    { name: "Laptop ", price: "35000 ", Brand: "HP" },
    { name: "Headphones ", price: "5000 ", Brand: "Sony" },
    { name: "Mouse ", price: "1000 ", Brand: "HP" },
    { name: "KeyBoard ", price: '2000 ', Brand: "Dell" },
  ];
  return (
    <div>
      <ul>
        {productsObjects.map((product, index) => {
          return (
            <li key={index}>
              Name : {product.name}
              Price : {product.price}
              Brand : {product.Brand}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
