import axios from "axios";
import * as c from "../constants/productConstants";

export const getAllFeaturedProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: c.PRODUCT_FEATURED_LIST_REQUEST,
    });

    const res = await axios.get("/api/products/featured");

    dispatch({
      type: c.PRODUCT_FEATURED_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: c.PRODUCT_FEATURED_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
