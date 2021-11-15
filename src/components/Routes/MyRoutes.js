import React from "react";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import Blogs from "../Home/Pages/Blogs";
// import Cursor from "../assets/Styles/Cursor";


export default function MyRoutes() {
  return (
    <div>
            

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}
