import { Link } from "react-router-dom";

const CartOnHoverItem = ({ cartItem }) => {
  let { id, name, image, price, countInStock, qty } = cartItem;

  if (name.length > 20) {
    name = name.substring(0, 19) + "...";
  }

  return (
    <>
      <div className="flex flex-wrap justify-start items-start border-b-2 py-3 mb-3 max-h-40">
        <div className="mr-5 h-28">
          <Link to="/products/3">
            <img
              className="h-full object-contain"
              src={image}
              alt="product_image"
            />
          </Link>
        </div>
        <div className="w-2/3">
          <h1 className="text-gray-700 font-medium text-lg mr-5 mb-3">
            {name}
          </h1>
          <p className="text-gray-700">${price.toFixed(2)}</p>
          <p className="text-gray-700">Quantity: {qty}</p>
        </div>
        <i className="far fa-trash-alt text-red-600 pt-1"></i>
      </div>
    </>
  );
};

export default CartOnHoverItem;
