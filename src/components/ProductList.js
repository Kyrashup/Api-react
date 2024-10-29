import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data); // сохраняем данные
        setLoading(false); // отключение индикатор азагрузки
      })
      .catch(error => console.error("Error fetching products: ", error));
  }, []);

  return (
    <div className="product-list">
      <h1>Store Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price} USD</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
