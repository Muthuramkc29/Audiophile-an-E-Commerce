import React, { useEffect, useState } from "react";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

import headphone from "../../Images/image-product-xx991-tablet.jpg";
import headphonexx59 from "../../Images/image-product-xx59-tablet.jpg";
import speakerzx9 from "../../Images/image-product-speakers-zx9-tablet.jpg";

import mark1tab from "../../Images/image-product-suggestion-tablet.jpg";
import xx59tab from "../../Images/image-product-xx59-tablet-suggestion.jpg";
import zx9tab from "../../Images/image-product-zx9-suggestions.jpg";

import speaker from "../../Images/image-category-thumbnail-speakers.png";
import headphoneCat from "../../Images/image-category-thumbnail-headphones.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";
import SuggestionCard from "../../Components/Product/SuggestionCard/SuggestionCard";
import ProductImageGrid from "../../Components/Product/ProductImageGrid/ProductImageGrid";
import ProductDetailsFlex from "../../Components/Product/ProductDetailsFlex/ProductDetailsFlex";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCartProducts } from "../../redux/reducers/userReducers";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const cartProducts = useSelector((state) => state.user.cartProducts);
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [params]);

  const localProducts = JSON.parse(window.localStorage.getItem("products"));

  function getProduct(productName) {
    return localProducts.find(
      (product) => product.name.split(" ").join("") === productName
    );
  }

  let product = getProduct(params.productName);

  // console.log(product);

  const render = (image, name, productPrice) => {
    let arr = [];

    for (var i = 0; i < cartProducts.length; i++) {
      arr.push(cartProducts[i].productName);
    }

    if (!arr.includes(name)) {
      dispatch(
        setCartProducts([
          ...cartProducts,
          {
            img: image,
            productName: name,
            productPrice: productPrice,
            count: 1,
          },
        ])
      );
    }
    // else {
    //   for (var j = 0; j < cartProducts.length; j++) {
    //     if (cartProducts[j].productName === name) {
    //       cartProducts[j] = {
    //         ...cartProducts[j],
    //         count: cartProducts[j]["count"] + 1,
    //       };
    //       console.log(cartProducts[j]);
    //       break;
    //     }
    //   }
    // }

    console.log(cartProducts);
  };

  // useEffect(() => {
  //   window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  // }, [cartProducts]);

  return (
    <div>
      <div className="container--mod mx-auto mt-8 xl:mt-14">
        <div className="mb-8 mt-4">
          <p
            onClick={() => navigate(-1)}
            className="text-black opacity-50 cursor-pointer"
          >
            Go Back
          </p>
        </div>

        <ProductDetailsFlex
          product={product}
          count={count}
          setCount={setCount}
          render={render}
        />

        <ProductImageGrid product={product} />

        <h1
          className="uppercase mt-16 mb-7 text-center font-bold text-2xl"
          style={{ letterSpacing: "0.857143px" }}
        >
          YOU MAY ALSO LIKE
        </h1>
        <div className="md:flex md:justify-between md:items-center md:gap-4">
          <div className="md:w-1/3">
            <Link to="/XX99MarkIHeadphones">
              <SuggestionCard
                img={headphone}
                imgTab={mark1tab}
                prodName="XX99 MARK I"
              />
            </Link>
          </div>
          <div className="md:w-1/3">
            <Link to="/XX59Headphones">
              <SuggestionCard
                img={headphonexx59}
                imgTab={xx59tab}
                prodName="XX59"
              />
            </Link>
          </div>
          <div className="md:w-1/3">
            <Link to="/ZX9SPEAKER">
              <SuggestionCard
                img={speakerzx9}
                imgTab={zx9tab}
                prodName="ZX9 SPEAKER"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="container--mod mx-auto md:flex gap-5 justify-between">
        <div
          className="md:w-4/12"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <CategoryCard img={headphoneCat} name="headphones" to="/headphones" />
        </div>
        <div
          className="md:w-4/12"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <CategoryCard img={speaker} name="speakers" to="/speakers" />
        </div>
        <div
          className="md:w-4/12"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <CategoryCard
            img={earphoneCategory}
            name="earphones"
            to="/earphones"
          />
        </div>
      </div>

      <AboveFooterFlex />
    </div>
  );
}

export default ProductDetail;
