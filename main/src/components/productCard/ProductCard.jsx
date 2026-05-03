import "./ProductCard.css";

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>

      <p className={inStock ? "in-stock" : "out-stock"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;