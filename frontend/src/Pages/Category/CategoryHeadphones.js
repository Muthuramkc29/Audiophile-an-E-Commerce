import React from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

import headphoneProd from "../../Images/image-product.jpg";
import headphoneProdTablet from "../../Images/image-product-tablet.jpg";
import headphoneProdDesktop from "../../Images/image-product-desktop.jpg";

import headphonexx991Prod from "../../Images/image-product-xx991.jpg";
import headphonexx991ProdTablet from "../../Images/image-product-xx991-tablet.jpg";
import headphonexx991ProdDesktop from "../../Images/image-product-xx991-desktop.jpg";

import headphonexx59Prod from "../../Images/image-product-xx59.jpg";
import headphonexx59ProdTablet from "../../Images/image-product-xx59-tablet.jpg";
import headphonexx59ProdDesktop from "../../Images/image-product-xx59-desktop.jpg";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";

import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";

function Category() {
  return (
    <div>
      <CategoryHeader category="headphones" />
      <CategoryFlex
        position="left"
        prodName="XX99 Mark II Headphones"
        imgMob={headphoneProd}
        imgTab={headphoneProdTablet}
        imgDesktop={headphoneProdDesktop}
        newProd="true"
      />
      <CategoryFlex
        position="right"
        prodName="XX99 Mark I Headphones"
        imgMob={headphonexx991Prod}
        imgTab={headphonexx991ProdTablet}
        imgDesktop={headphonexx991ProdDesktop}
      />
      <CategoryFlex
        position="left"
        prodName="XX59 Headphones"
        imgMob={headphonexx59Prod}
        imgTab={headphonexx59ProdTablet}
        imgDesktop={headphonexx59ProdDesktop}
      />

      {/* Category Card Home */}

      <div className="px-6 md:px-12 xl:px-40 md:flex gap-3 justify-evenly">
        <CategoryCard img={headphone} name="headphones" />
        <CategoryCard img={speaker} name="speaker" />
        <CategoryCard img={earphoneCategory} name="earphones" />
      </div>

      <AboveFooterFlex />
    </div>
  );
}

export default Category;
