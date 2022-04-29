import React, { useEffect } from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

// For CategoryCard
import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";

import { useDispatch, useSelector } from "react-redux";
import api from "../../api/axiosConfig";
import { setLoading, setProducts } from "../../redux/reducers/userReducers";

function CategorySpeakers() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.products);

  useEffect(() => {
    const retriveEarphones = async () => {
      dispatch(setLoading(true));
      const response = await api.get("speakers/");
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 300);
      // console.log(response.data);
      dispatch(setProducts(response.data));
    };
    retriveEarphones();
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
      <CategoryHeader category="speakers" />

      <CategoryFlex products={products} />
      {/* Category Card Home */}

      <div className="container--mod mx-auto md:flex gap-5 justify-between">
        <div
          className="md:w-4/12"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <CategoryCard img={headphone} name="headphones" to="/headphones" />
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

export default CategorySpeakers;
