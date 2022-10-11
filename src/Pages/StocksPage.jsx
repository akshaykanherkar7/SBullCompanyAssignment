import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStocksAPI } from "../Redux/Stocks/stocks.action";

const StocksPage = () => {
  const dispatch = useDispatch();
  const { Stocks } = useSelector((state) => state.stocks);
  console.log("Stocks:", Stocks);

  useEffect(() => {
    dispatch(getStocksAPI());
  }, []);
  return <div>StocksPage</div>;
};

export default StocksPage;
