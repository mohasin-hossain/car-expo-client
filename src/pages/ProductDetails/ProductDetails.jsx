import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const detailedProduct = useLoaderData();
  console.log(detailedProduct);

  const handleAddToCart = () => {
    axios.post("http://localhost:3000/cart", detailedProduct).then((data) => {
      if (data.data == "Already In the Cart") {
        toast('Already in The Cart!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
      if (data.data.insertedId) {
        toast('Added To Cart!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
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
        <ToastContainer />
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
