import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const detailedProduct = useLoaderData();
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
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
