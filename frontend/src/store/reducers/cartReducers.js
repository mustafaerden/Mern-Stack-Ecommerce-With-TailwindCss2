import * as c from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    // case c.CART_ADD_ITEM:
    //   const item = action.payload;

    //   // eğer aynı product daha önce cart a eklendimi diye kontrol yapmamız lazım;
    //   const existItem = state.cartItems.find((x) => x.product === item.product);

    //   console.log("exist item: " + existItem);

    //   if (existItem) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map((x) =>
    //         x.product === existItem.product ? item : x
    //       ),
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       cartItems: [...state.cartItems, item],
    //     };
    //   }
    case c.CART_ADD_ITEM:
      const item = action.payload;

      // eğer aynı product daha önce cart a eklendimi diye kontrol yapmamız lazım;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      console.log("exist item: " + existItem);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case c.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case c.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
