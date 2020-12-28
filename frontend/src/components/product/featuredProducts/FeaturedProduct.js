import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/cartActions";
import { Link } from "react-router-dom";
const FeaturedProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="shadow-lg" style={{ maxHeight: "30rem" }}>
      <Link to="/products/3">
        <img
          alt="product_image"
          className="block h-3/4 w-full object-contain transition duration-500 ease-in transform hover:scale-105"
          src={product.image}
        />
      </Link>
      <div className="flex items-center justify-between pt-4 px-6">
        <Link className="font-medium" to="/products/3">
          {product.name}
        </Link>
        <span className="font-medium text-orange-500 text-lg">
          ${product.price.toFixed(2)}
        </span>
      </div>
      <div className="py-4 px-6">
        <button
          onClick={() => handleAddToCart(product)}
          className="btn btn-primary-outline w-full"
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
