import { useState, useEffect } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products-inventory.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="products">
      <h2>Product Inventory</h2>

      <div className="products-container">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
      </div>

    </section>
  );
};

export default Products;