import axios from "axios";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      photo,
      productName,
      brandName,
      productType,
      price,
      description,
      rating,
    };

    axios.post("http://localhost:3000/products", newProduct).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Product Added successfully!",
          icon: "success",
          confirmButtonText: "Close",
        });

        form.reset();
      }
    });
  };

  return (
    <div>
      <div className="container mx-auto px-10 py-20">
        <Link to="/">
          <button className="link-accent flex gap-2 items-center text-xl ml-10">
            <IoArrowBackSharp />
            Home
          </button>
        </Link>
        <h1 className="text-3xl text-center">Add a New Product</h1>
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control w-full md:w-3/4 mx-auto">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-3/4 mx-auto">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                name="brandName"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-3/4 mx-auto">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <input
                type="text"
                placeholder="Product Type"
                name="type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-3/4 mx-auto mb-3">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <input
            className="btn btn-accent mx-auto w-full md:w-3/4"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
