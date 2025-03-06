import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function SingleProduct({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(err => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) {
    return <div className='container section_space' style={{textAlign:'center'}}>Loading...</div>;
  }
  console.log(product);


  return (
    // <div className="container single_product_page">
    //   <div className='row'>
    //     <div className='col-6'>
    //       <img src={product.image} alt={product.title} />
    //     </div>
    //     <div className='col-6'>
    //       <h2>{product.title}</h2>
    //         <p style={{
    //           color: "red"
    //         }}>
    //         {product.category}</p>
    //         <p>Rating: {product.rating?.rate || "No rating available"} </p>
    //         <p>Reviews : {product.rating?.count || 0} </p>
    //         <p>{product.description}</p>
    //         <p>Price: $ {product.price}</p>
    //       <button
    //         className="btn-solid btn text_big"
    //         onClick={() => addToCart(product)}
    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
}
