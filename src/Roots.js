import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SearchPage from "./SearchPage/SearchPage";
import Cart from "./Cart/Cart";
import Payment from "./Payment/Payment";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="search" element={<SearchPage />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="payment" element={<Payment />}></Route>
    </Routes>
  );
};

export default Root;
