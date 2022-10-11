import * as types from "./stocks.actionTypes";

const initialState = {
  Stocks: [],
  isError: false,
  isLoading: false,
};

export const sReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_STOCKS_REQ: {
      return { ...state, isError: false, isLoading: true };
    }

    case types.GET_STOCKS_SUCC: {
      let arr = [];
      payload = payload.trim().split("\n");

      for (let i = 1; i < payload.length; i++) {
        let newArr = payload[i].split(",");
        let Symbol = newArr[0];
        let Name = newArr[1];
        let Sector = newArr[2];
        let Validtill = newArr[3];
        let obj = {
          Symbol: Symbol,
          Name: Name,
          Sector: Sector,
          Validtill: Validtill,
        };
        arr.push(obj);
      }
      return { ...state, Stocks: arr, isError: false, isLoading: false };
    }

    case types.GET_STOCKS_FAIL: {
      return { ...state, isError: true, isLoading: false };
    }

    default: {
      return state;
    }
  }
};
