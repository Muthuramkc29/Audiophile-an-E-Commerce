import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Layout/Footer/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";
import NavMenu from "./Components/Layout/Navbar/NavMenu";
import CategoryEarphones from "./Pages/Category/CategoryEarphones";
import CategoryHeadphones from "./Pages/Category/CategoryHeadphones";
import CategorySpeakers from "./Pages/Category/CategorySpeakers";
import Home from "./Pages/Home/home";
import ProductDetail from "./Pages/Product/ProductDetail";
import Checkout from "./Pages/Checkout/Checkout";

import headphone from "./Images/image-category-thumbnail-headphones.png";
import speaker from "./Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "./Images/image-category-thumbnail-earphones.png";

// import { setCartMenu } from "./redux/reducers/userReducers";

import "./index.css";
import CartMenu from "./Components/Cart/CartMenu";

function Router() {
  const navMenu = useSelector((state) => state.user.navMenu);
  const cartMenu = useSelector((state) => state.user.cartMenu);
  // const dispatch = useDispatch();

  const openModal = (event) => {
    document.body.classList.add("modal-open");
    // this.setState({ showModal: true });
  };
  const hideModal = (event) => {
    document.body.classList.remove("modal-open");
    // this.setState({ showModal: false });
  };

  if (navMenu || cartMenu) {
    openModal();
  } else {
    hideModal();
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {navMenu ? (
          <div
            className={`fixed bg-white top-0 left-0 w-full h-fit mt-20 menu`}
            style={{ zIndex: 1 }}
          >
            <div className="px-6 md:px-12 xl:px-40 md:flex md:flex-row gap-3 justify-evenly w-full h-full">
              <div className="h-full overflow-y-auto md:flex md:flex-row md:gap-3">
                <NavMenu img={headphone} name="headphones" to="/headphones" />
                <NavMenu img={speaker} name="speakers" to="/speakers" />
                <NavMenu
                  img={earphoneCategory}
                  name="earphones"
                  to="/earphones"
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {cartMenu ? (
          <div
            className="fixed bg-white top-0 right-0 h-fit mx-6 w-10/12 md:w-3/6 lg:w-2/6 mt-28 xl:mr-40 rounded-md"
            style={{ zIndex: 1 }}
          >
            <CartMenu />
          </div>
        ) : (
          <div></div>
        )}

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
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
