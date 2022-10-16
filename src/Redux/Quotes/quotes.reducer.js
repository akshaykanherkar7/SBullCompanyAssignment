import * as types from "./quotes.actionTypes";

const initialState = {
  Quotes: [],
  isError: false,
  isLoading: false,
};

export const qReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_QUOTES_REQ: {
      return { ...state, isError: false, isLoading: true };
    }

    case types.GET_QUOTES_SUCC: {
      var arr = [];
      for (let key in payload.data) {
        arr = payload.data[key];
      }
      return {
        ...state,
        Quotes: arr,
        isError: false,
        isLoading: false,
      };
    }

    case types.GET_QUOTES_FAIL: {
      return { ...state, isError: true, isLoading: false };
    }

    default: {
      return state;
    }
  }
};
