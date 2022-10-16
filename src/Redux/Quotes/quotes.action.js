import * as types from "./quotes.actionTypes";
import axios from "axios";

export const getQuotesAPI = (Symbol) => (dispatch) => {
  dispatch({ type: types.GET_QUOTES_REQ });
  axios
    .get(`https://prototype.sbulltech.com/api/v2/quotes/${Symbol}`)
    .then((res) => {
      dispatch({
        type: types.GET_QUOTES_SUCC,
        payload: { data: res.data.payload, Symbol: Symbol },
      });
    })
    .catch(() => {
      dispatch({ type: types.GET_QUOTES_FAIL });
    });
};
