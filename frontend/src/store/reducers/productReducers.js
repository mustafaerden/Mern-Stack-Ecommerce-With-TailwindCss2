import * as c from "../constants/productConstants";

export const featuredProductListReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case c.PRODUCT_FEATURED_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case c.PRODUCT_FEATURED_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case c.PRODUCT_FEATURED_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
