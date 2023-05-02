import React from "react";

import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <div className="my-5">
        <Link to={`${1}`}>Product 1</Link>
      </div>
      <div className='my-5'>
        <Link  to={`${2}`}>Product 2</Link>
      </div>
      <div className='my-5'>
        <Link  to={`${3}`}>Product 3</Link>
      </div>
      <div className='my-5'>
        <Link  to={`${4}`}>Product 4</Link>
      </div>
      <div className='my-5'>
        <Link  to={`${5}`}>Product 5</Link>
      </div>
      <div className='my-5'>
        <Link  to={`${6}`}>Product 6</Link>
      </div>
    </div>
  );
};

export default Products;
