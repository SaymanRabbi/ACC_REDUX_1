import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../Context/ProductProvider";

const Cart = () => {
  const { state:{loading,error,cart} } = useProducts();
  console.log(cart);
  let content;
  if (loading) {
    content = <h1>Loading...</h1>;
  }
  if (error) {
    content = <h1>Error...</h1>;
  }
  if (!loading&&!error&&cart.length > 0) {
    content = cart.map((product) => {
      return <ProductCard product={product} key={product.id} cart/>;
    });
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Cart;
