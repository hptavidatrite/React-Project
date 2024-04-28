import React from 'react';
import data from './Data.json';
import Product from './Product';

function ProductList() {
  return (
    <>
        {data.map((product) => (
            <Product key={product.id} {...product}/>
        ))}
    </>
  );
}

export default ProductList;
