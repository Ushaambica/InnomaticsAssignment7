import React from 'react';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css'; // Ensure this CSS file is correctly imported

const products = [
  { id: 1, name: 'Gift Box', description: 'A beautiful gift box.', price: 29.99, image: 'https://tse3.mm.bing.net/th?id=OIP.ZisIUqB6MAwak5MSzZ0muQHaLG&pid=Api&P=0&h=180-box.jpg' },
  { id: 2, name: 'Teddy Bear', description: 'A soft and cuddly teddy bear.', price: 15.99, image: 'https://tse4.mm.bing.net/th?id=OIP.R32CDUDi7r-GtDXGBGotbgHaE8&pid=Api&P=0&h=180/teddy-bear.jpg' },
  { id: 3, name: 'Flower Bouquet', description: 'A fresh bouquet of flowers.', price: 19.99, image: 'https://tse3.mm.bing.net/th?id=OIP.fBpxxBIJBh-RTYECaol1AAAAAA&pid=Api&P=0&h=180/flower-bouquet.jpg' },
  { id: 4, name: 'Chocolate Box', description: 'Delicious assorted chocolates.', price: 12.49, image: 'https://tse4.mm.bing.net/th?id=OIP.JPTsJqjbDlUi1VrBjc0TgwHaFj&pid=Api&P=0&h=180/chocolate-box.jpg' },
  { id: 5, name: 'Handmade Card', description: 'A beautiful handmade card.', price: 4.99, image: 'https://tse2.mm.bing.net/th?id=OIP.ISpYvkeFoqMDLb9UySdeJAHaEK&pid=Api&P=0&h=180/handmade-card.jpg' },
];

function ProductsPage() {
  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
