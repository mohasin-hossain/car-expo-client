import { useLoaderData } from "react-router-dom";
import Slider from "./Slider/Slider";
import Product from "./Product/Product";

const BrandProducts = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <div className="container mx-auto flex flex-col items-center justify-center px-10">
        {/* Slider */}
        <div className="carousel w-3/5">
          {products.map((product, idx) => (
            <Slider key={product._id} idx={idx} photo={product.photo}></Slider>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {products.map((product, idx) => (
            <a
              key={product._id}
              href={`#item${idx + 1}`}
              className="btn btn-xs"
            >
              {idx + 1}
            </a>
          ))}
        </div>

        {/* Products */}
        <h1 className="text-3xl text-center mt-10">Products</h1>
        <div className="grid grid-cols-4 gap-4 my-10">
          {products.map((product, idx) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default BrandProducts;
