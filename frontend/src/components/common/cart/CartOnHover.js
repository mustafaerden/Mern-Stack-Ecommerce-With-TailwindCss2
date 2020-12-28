import { useSelector } from "react-redux";
import CartOnHoverItem from "./CartOnHoverItem";

const CartOnHover = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="z-50 p-5 overflow-hidden">
      {cartItems && cartItems.length > 1 ? (
        cartItems.map((cartItem) => (
          <CartOnHoverItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default CartOnHover;
