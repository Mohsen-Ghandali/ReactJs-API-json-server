import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <section id="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
     <img src={require(`../../Images/${product.image}`)} alt={product.title} />

          <div>
            <h2>{product.title}</h2>
            <p>Preis: {product.price}</p>
            <a href="/product">Weiter...</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;

