import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SearchPage from "./SearchPage/SearchPage";

const Root = () =>{
    return(
        <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        </Routes>
    )
}

export default Root;