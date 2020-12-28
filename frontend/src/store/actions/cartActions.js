import * as c from "../constants/cartConstants";

// with get state you can access any state you want;
// export const addToCart = (id, qty = 1) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/api/products/${id}`);

//   console.log("gelen product detail: " + data);

//   dispatch({
//     type: c.CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty,
//     },
//   });

//   // State teki cart i localStorage a atıyoruz;
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

export const addToCart = (product, qty = 1) => async (dispatch, getState) => {
  dispatch({
    type: c.CART_ADD_ITEM,
    payload: {
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    },
  });

  // State teki cart i localStorage a atıyoruz;
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
