import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Layout/Footer/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";
import CategoryEarphones from "./Pages/Category/CategoryEarphones";
import CategoryHeadphones from "./Pages/Category/CategoryHeadphones";
import CategorySpeakers from "./Pages/Category/CategorySpeakers";
import Home from "./Pages/Home/home";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={
              <main className="my-60 text-center" style={{ padding: "1rem" }}>
                <p className="font-bold" style={{ fontSize: "32px" }}>
                  404 ERROR! PAGE NOT FOUND
                </p>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<CategoryHeadphones />} />
          <Route path="/speakers" element={<CategorySpeakers />} />
          <Route path="/earphones" element={<CategoryEarphones />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
