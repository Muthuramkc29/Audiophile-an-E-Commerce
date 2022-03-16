import React from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

function Category() {
  return (
    <div>
      <CategoryHeader category="headphones" />
      <CategoryFlex position="left" />
      <CategoryFlex position="right" />
      <CategoryFlex position="left" />
      <AboveFooterFlex />
    </div>
  );
}

export default Category;
