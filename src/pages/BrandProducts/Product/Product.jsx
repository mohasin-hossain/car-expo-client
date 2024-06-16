import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, brandName, productName, price } = product;

  return (
    <div className="border p-6">
      <p>{productName}</p>
      <p>{price}</p>
      <Link to={`/product-details/${_id}`}>
        <button className="btn block mt-4">Details</button>
      </Link>
      <Link to={`/update-product/${_id}`}>
        <button className="btn block mt-4">Update product</button>
      </Link>
    </div>
  );
};

export default Product;
