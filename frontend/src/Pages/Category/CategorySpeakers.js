import React from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

// For Category Flex
import speakerProd from "../../Images/image-product-speaker-zx9.jpg";
import speakerProdTablet from "../../Images/image-product-speakers-zx9-tablet.jpg";
import speakerProdDesktop from "../../Images/image-product-speakers-zx9-desktop.jpg";

import speakerzx7Prod from "../../Images/image-product-speakers-zx7.jpg";
import speakerzx7ProdTablet from "../../Images/image-product-speakers-zx7-tablet.jpg";
import speakerzx7ProdDesktop from "../../Images/image-product-speakers-zx7-desktop.jpg";

// For CategoryCard
import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";

function CategorySpeakers() {
  return (
    <div>
      <CategoryHeader category="speakers" />
      <CategoryFlex
        position="left"
        prodName="ZX9
        SPEAKER"
        imgMob={speakerProd}
        imgTab={speakerProdTablet}
        imgDesktop={speakerProdDesktop}
        newProd="true"
      />
      <CategoryFlex
        position="right"
        prodName="ZX7 SPEAKER"
        imgMob={speakerzx7Prod}
        imgTab={speakerzx7ProdTablet}
        imgDesktop={speakerzx7ProdDesktop}
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

export default CategorySpeakers;
