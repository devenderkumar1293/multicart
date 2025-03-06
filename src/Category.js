import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
    // console.log(products)
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    // Fetch products for the specific category
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false); // Set loading to false after fetching
        })
    .catch((err) => {
        console.error('Error fetching category products:', err);
        setLoading(false); // Ensure loading state is updated even on error
      });
    }, [categoryName]);

    if (loading) {
        return <div className="container section_space spinner"></div>; // Replace with your spinner
      }
    
      if (products.length === 0) {
        return <p>No products found for this category.</p>;
      }
//   console.log(products)

  return (
    <div className='container section_space'>
     <h2 style={{textTransform:"capitalize", textAlign:"center"}}>{categoryName}</h2>
    <div className="Product">
      {
        products.map((product) => (
          <div key={product.id}>
            <div className="sp_product">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h3 className="sp_product_title">{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  );
}

export default Category;
