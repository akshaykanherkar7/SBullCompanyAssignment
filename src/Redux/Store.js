import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { qReducer } from "./Quotes/quotes.reducer";
import { sReducer } from "./Stocks/stocks.reducer";

const rootReducer = combineReducers({
  quotes: qReducer,
  stocks: sReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
