import * as types from "./stocks.actionTypes";
import axios from "axios";

export const getStocksAPI = () => (dispatch) => {
  dispatch({ type: types.GET_STOCKS_REQ });
  axios
    .get("https://prototype.sbulltech.com/api/v2/instruments")
    .then((res) => {
      dispatch({ type: types.GET_STOCKS_SUCC, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_STOCKS_FAIL });
    });
};
