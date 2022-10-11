import React from "react";
import { Route, Routes } from "react-router-dom";
import QuotesPage from "../Pages/QuotesPage";
import StocksPage from "../Pages/StocksPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StocksPage />}></Route>
        <Route path="/:symbol" element={<QuotesPage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
