import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  setCartProducts,
  setNavMenu,
  setPaymentModal,
} from "./redux/reducers/userReducers";
import Aos from "aos";
import "aos/dist/aos.css";

function Router() {
  Aos.init({
    once: true,
  });

  const navMenu = useSelector((state) => state.user.navMenu);
  const cartMenu = useSelector((state) => state.user.cartMenu);
  const paymentModal = useSelector((state) => state.user.paymentModal);
  const cartProducts = useSelector((state) => state.user.cartProducts);
  const dispatch = useDispatch();

  const openModal = (event) => {
    document.body.classList.add("modal-open");
    // this.setState({ showModal: true });
  };
  const hideModal = (event) => {
    document.body.classList.remove("modal-open");
    // this.setState({ showModal: false });
  };

  if (navMenu || cartMenu || paymentModal) {
    openModal();
  } else {
    hideModal();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paymentModal]);

  useEffect(() => {
    const cartProductsLocal = JSON.parse(localStorage.getItem("cartProducts"));
    dispatch(setCartProducts(cartProductsLocal));
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {navMenu ? (
          <div
            onClick={() => {
              dispatch(setNavMenu(false));
            }}
            className="bg-modal"
          >
            <div
              className={`fixed bg-white top-0 left-0 w-full h-fit mt-20 menu`}
              style={{ zIndex: 1 }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="px-6 md:px-12 xl:px-40 md:flex md:flex-row gap-3 justify-evenly w-full h-full">
                <div className="h-full overflow-y-auto md:flex md:flex-row md:gap-3">
                  <NavMenu img={headphone} name="headphones" />
                  <NavMenu img={speaker} name="speakers" />
                  <NavMenu
                    img={earphoneCategory}
                    name="earphones"
                    // to="/earphones"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {cartMenu ? (
          <div
            // onClick={() => {
            //   dispatch(setCartMenu(false));
            // }}
            className="bg-modal"
          >
            <div className="container--mod mx-auto relative top-16">
              <div
                className="absolute bg-white right-0 w-full mt-10 md:w-3/6 lg:w-2/6 xl:w-2/5 rounded-md"
                style={{ zIndex: 1 }}
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <CartMenu />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {paymentModal ? (
          <div
            // onClick={() => {
            //   dispatch(setPaymentModal(false));
            // }}
            className="bg-modal px-6 md:px-12 xl:px-40"
          >
            <div className="mt-32 w-full md:w-3/4 lg:w-2/4 xl:w-3/6 mx-auto bg-white p-12">
              <div className="rounded-full bg-[#D87D4A] w-12 h-12 flex items-center justify-center">
                <i
                  class="fa fa-check"
                  style={{
                    color: "white",
                    fontSize: "24px",
                  }}
                ></i>
              </div>
              <div className="my-4">
                <p className="block text-2xl">
                  THANK YOU
                  <span className="block text-2xl"> FOR YOUR ORDER</span>
                </p>
                <p
                  className="text-black opacity-50 mt-2"
                  style={{ fontSize: "13px" }}
                >
                  You will receive an email confirmation shortly!
                </p>
                <p
                  className="text-black opacity-50 mt-2"
                  style={{ fontSize: "13px" }}
                >
                  This is just a demo app!
                  <p className="mt-1">
                    Challenge by{" "}
                    <span className=" mx-1 text-[#0000EE] underline">
                      <a
                        href="https://www.frontendmentor.io/challenges"
                        // target="_blank"
                      >
                        Frontend Mentor
                      </a>
                    </span>
                    Developed by{" "}
                    <span className="mx-1 text-[#0000EE] underline">
                      <a href="https://github.com/Muthuramkc29">Muthuram K C</a>
                    </span>
                  </p>
                </p>
              </div>
              <a href="/">
                <button
                  className="bg-[#D87D4A] uppercase text-white hover:bg-[#fbaf85] w-full py-2 mt-3"
                  onClick={() => {
                    dispatch(setPaymentModal(false));
                  }}
                  style={{ fontSize: "13px" }}
                >
                  Back to home
                </button>
              </a>
            </div>
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
          <Route path=":productName" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
