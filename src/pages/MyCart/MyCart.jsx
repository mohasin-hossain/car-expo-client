import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [cart, setCart] = useState(loadedCart);

  const total = loadedCart.reduce((total, cv) => {
    total += Number(cv.price);
    return total;
  }, 0);

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`).then((data) => {
      if (data.data.deletedCount > 0) {
        const remaining = cart.filter((item) => item._id !== id);
        setCart(remaining);
        alert("Product deleted successfully");
      }
    });
  };

  return (
    <div>
      <div className="container mx-auto px-10 my-20">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-accent">
                <th></th>
                <th>Product</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.productName}</td>
                  <td>{item.brandName}</td>
                  <td>{item.price} $</td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(item._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <div>
            <h3 className="text-center text-2xl font-semibold mt-6">
              Total: {total}${" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
