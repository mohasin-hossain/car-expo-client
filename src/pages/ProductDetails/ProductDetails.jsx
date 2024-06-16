import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const detailedProduct = useLoaderData();
  console.log(detailedProduct);

  const handleAddToCart = () => {
    axios.post("http://localhost:3000/cart", detailedProduct).then((data) => {
      if (data.data == "Already In the Cart") {
        alert("Already In the Cart");
      }
      if (data.data.insertedId) {
        alert("Added to cart");
      }
    });
  };

  const {
    _id,
    brandName,
    productName,
    price,
    description,
    productType,
    rating,
  } = detailedProduct;

  return (
    <div>
      <div className="container mx-auto px-10 my-20">
        <h1>Product Details</h1>
        <p>{productName}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{description}</p>
        <button onClick={handleAddToCart} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
