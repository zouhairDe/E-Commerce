import React from 'react';
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
          <h1 className='text-2xl bg-black py-2 text-white w-80 text-center'>Shopping Time</h1>
          <span className='w-20 h-[3px] bg-black'></span>
          <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor! Sed nam labore quas ab architecto reprehenderit recusandae. Ad voluptatum repellat, eos illum totam voluptates delectus aut repudiandae unde eaque!</p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 px-10 gap-10 grid grid-cols-4'>
        {products.map((item) => (
            <ProductsCard key={item._id} product={item}/>
          ))}
      </div>
    </div>
  );
};

export default Products;