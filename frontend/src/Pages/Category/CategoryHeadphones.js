import React, { useEffect } from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";

import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/axiosConfig";
import {
  setLoading,
  // setHeadphoneProducts,
  setProducts,
} from "../../redux/reducers/userReducers";

function Category() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.products);

  useEffect(() => {
    const retriveHeadphones = async () => {
      dispatch(setLoading(true));
      const response = await api.get("headphones/");
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2700);
      // console.log(response.data);
      dispatch(setProducts(response.data));
    };
    retriveHeadphones();
  }, [dispatch]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  console.log(products);

  return (
    <div>
      <CategoryHeader category="headphones" />
      <CategoryFlex products={products} />

      {/* Category Card Home */}

      <div className="px-6 md:px-12 xl:px-40 md:flex gap-5 justify-between">
        <div className="md:w-4/12">
          <CategoryCard img={headphone} name="headphones" to="/headphones" />
        </div>
        <div className="md:w-4/12">
          <CategoryCard img={speaker} name="speakers" to="/speakers" />
        </div>
        <div className="md:w-4/12">
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

export default Category;
