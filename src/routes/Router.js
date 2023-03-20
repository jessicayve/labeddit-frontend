import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import FeedPage from "../pages/FeedPage/FeedPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import LoginPage from "../pages/LoginPage/LoginPage"

const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/feed" element={<FeedPage/>}/>
          <Route path="/feed/:id" element={<FeedPage />}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/" element={<LoginPage/>}/>
          
         
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router