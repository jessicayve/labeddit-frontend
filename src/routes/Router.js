import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import FeedPage from "../pages/FeedPage/FeedPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/feed" element={<FeedPage/>}/>
          <Route path="/detailspage/:id" element={<DetailsPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/" element={<LoginPage/>}/>
          
         
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router