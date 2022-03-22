import React from "react";
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

function ProductDetail() {
  return (
    <div>
      <div className="px-6 md:px-12 xl:px-40">
        <div className="my-8">
          <p className="text-black opacity-50">Go Back</p>
        </div>

        <ProductDetailsFlex />

        <ProductImageGrid />

        <h1
          className="uppercase mt-16 mb-7 text-center font-bold text-2xl"
          style={{ letterSpacing: "0.857143px" }}
        >
          YOU MAY ALSO LIKE
        </h1>
        <div className="md:flex justify-center items-center md:gap-4">
          <SuggestionCard
            img={headphone}
            imgTab={mark1tab}
            prodName="XX99 MARK I"
          />
          <SuggestionCard
            img={headphonexx59}
            imgTab={xx59tab}
            prodName="XX59"
          />
          <SuggestionCard
            img={speakerzx9}
            imgTab={zx9tab}
            prodName="ZX9 SPEAKER"
          />
        </div>
        <div className="px-6 md:px-12 xl:px-40 md:flex gap-3 justify-evenly">
          <CategoryCard img={headphoneCat} name="headphones" to="/headphones" />
          <CategoryCard img={speaker} name="speakers" to="/speakers" />
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
