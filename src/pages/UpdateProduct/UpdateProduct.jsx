import axios from "axios";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    brandName,
    productName,
    price,
    description,
    productType,
    rating,
    photo
  } = product;
  const navigate = useNavigate();

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updatedProduct = {
      photo,
      productName,
      brandName,
      productType,
      price,
      description,
      rating,
    };
    console.log(updatedProduct);

    axios.put(`http://localhost:3000/cart/${_id}`, updatedProduct).then((data) => {
      if (data.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Product Updated successfully!",
          icon: "success",
          confirmButtonText: "Close",
        });

        navigate(-1);
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
        <h1 className="text-3xl text-center">Update the Existing Product</h1>
        <form onSubmit={handleUpdateProduct} className="card-body">
          <div className="form-control w-full md:w-3/4 mx-auto">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              defaultValue={photo}
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
                defaultValue={productName}
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
                defaultValue={brandName}
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
                defaultValue={productType}
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
                defaultValue={price}
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
                defaultValue={description}
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
                defaultValue={rating}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <input
            className="btn btn-accent mx-auto w-full md:w-3/4"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
