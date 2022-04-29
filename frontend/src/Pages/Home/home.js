import Button from "../../Components/Button/Button";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";
import "./home.css";
import imgspeaker from "../../Images/image-speaker-zx9.png";
import imgspeakerdesktop from "../../Images/image-speaker-zx9-desktop.png";
import imgspeakerzx7 from "../../Images/image-speaker-zx7.jpg";
import imgspeakerzx7tablet from "../../Images/image-speaker-zx7-tablet.jpg";
import imgspeakerzx7desktop from "../../Images/image-speaker-zx7-desktop.jpg";
import earphone from "../../Images/image-earphones-yx1.jpg";
import earphonetablet from "../../Images/image-earphones-yx1-tablet.jpg";
import earphonedesktop from "../../Images/image-earphones-yx1-desktop.jpg";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";

// For Category Card
import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setProducts } from "../../redux/reducers/userReducers";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/axiosConfig";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../../redux/reducers/userReducers";
// import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.products);
  // const cartProducts = useSelector((state) => state.user.cartProducts);

  useEffect(() => {
    const retrieveProducts = async () => {
      const response = await api.get("products/");
      window.localStorage.setItem("products", JSON.stringify(response.data));
      // console.log(response.data);
      dispatch(setProducts(response.data));
    };

    retrieveProducts();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  // useEffect(() => {
  //   window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  // }, [cartProducts]);

  console.log(products);

  return (
    <div>
      <header className="bg-[#000000] px-6 md:px-12 xl:px-40 header--mod">
        <hr className="opacity-50"></hr>
        <div className="mt-24 flex flex-col justify-center items-center gap-6 text-center mx-auto lg:text-left max-w-sm md:mx-auto lg:items-start lg:mx-0">
          <p
            className="uppercase text-sm font-normal md:mt-6 lg:mt-6"
            style={{ letterSpacing: "10px", color: "white", opacity: "50%" }}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            New Product
          </p>
          <h1
            className="uppercase text-[#FFFFFF] font-bold text-4xl lg:text-6xl"
            style={{ letterSpacing: "1.28571px" }}
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            XX99 Mark II Headphones
          </h1>
          <p
            className="font-medium leading-6 mb-2 "
            style={{ fontSize: "15px", color: "white", opacity: "50%" }}
            data-aos="flip-left"
            data-aos-delay="900"
            data-aos-duration="700"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to="/XX99MarkIIHeadphones"
            data-aos="fade"
            data-aos-delay="1100"
            data-aos-duration="700"
          >
            <Button
              bgcolor="#D87D4A"
              color="white"
              name="See Product"
              hover="hover:bg-[#fbaf85]"
            />
          </Link>
        </div>
      </header>

      {/* Category Card Home */}

      <div className="px-6 md:px-12 xl:px-40 md:flex gap-5 justify-between lg:my-16">
        <div
          className="md:w-4/12"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          data-aos-delay="200"
          data-aos-offset="0"
          // onClick={() => {
          //   dispatch(setProducts(headphoneProducts));
          //   console.log(products);
          // }}
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

      {/* Products Section Home */}

      <section className="px-6 md:px-12 xl:px-40">
        <div className="flex flex-col justify-center items-center lg:items-between gap-7 ">
          <div
            className="rounded-md w-full bg-[#D87D4A] pt-16 pb-2"
            style={{ height: "647px" }}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-16 zx9--mod">
              <div
                data-aos="zoom-in-up"
                data-aos-delay="100"
                data-aos-duration="700"
              >
                <img
                  className="block lg:hidden"
                  src={imgspeaker}
                  alt="imgspeaker"
                  style={{ width: "159px", height: "175px" }}
                />
                <img
                  className="hidden lg:block lg:relative lg:top-36"
                  src={imgspeakerdesktop}
                  alt="imgspeaker"
                  style={{ width: "374px", height: "440px" }}
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:ml-16">
                <h1
                  className="uppercase font-bold text-4xl md:text-6xl text-white mt-6 mb-6"
                  style={{ letterSpacing: "1.28571px" }}
                >
                  ZX9 <span className="block">SPEAKER</span>
                </h1>
                <p
                  className="text-white opacity-75 leading-6 mb-6 max-w-sm"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link to="/ZX9SPEAKER">
                  <Button
                    bgcolor="#000000"
                    color="white"
                    name="See Product"
                    hover="hover:bg-[#4C4C4C]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <img
              className="rounded-md w-full md:hidden lg:hidden"
              src={imgspeakerzx7}
              alt="imgspeakerzx7"
            />
            <img
              className="rounded-md hidden w-full md:block lg:hidden"
              src={imgspeakerzx7tablet}
              alt="imgspeakerzx7"
            />
            <img
              className="rounded-md hidden w-full lg:block"
              // style={{ width: "1240px" }}
              src={imgspeakerzx7desktop}
              alt="imgspeakerzx7"
            />
          </div>
          <div className="flex flex-col w-full md:flex-row md:justify-between gap-7 lg:flex-row lg:justify-between lg:gap-5 md:gap-3 lg:w-full">
            <div
              className="md:w-2/4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              <img
                className="rounded-md w-full md:hidden lg:hidden"
                src={earphone}
                alt="earphones"
              />
              <img
                className="rounded-md hidden w-full md:block lg:hidden h-52 md:h-80"
                // style={{ width: "339px" }}
                src={earphonetablet}
                alt="earphones"
              />
              <img
                className="rounded-md hidden md:hidden lg:block lg:w-full h-52 md:h-80"
                // style={{ width: "540px", height: "320px" }}
                src={earphonedesktop}
                alt="earphones"
              />
            </div>
            <div
              className="bg-[#F1F1F1] rounded-md flex h-52 md:h-80 flex-col w-full md:w-2/4 justify-center pl-7 lg:hidden"
              // style={{ width: "328px" }}
            >
              <div>
                <h1 className="mb-3" style={{ fontSize: "28px" }}>
                  YX1 EARPHONES
                </h1>
                <Link to="/YX1WIRELESSEARPHONES">
                  <Button bgcolor="#F1F1F1" color="black" name="See Product" />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#F1F1F1] rounded-md w-2/4 lg:flex h-52 md:h-80 lg:flex-col lg:justify-center lg:items-center pl-7 hidden lg:block"
              // style={{ width: "540px" }}
            >
              <div>
                <h1 className="mb-3" style={{ fontSize: "28px" }}>
                  YX1 EARPHONES
                </h1>
                <Link to="/YX1WIRELESSEARPHONES">
                  <Button
                    bgcolor="#F1F1F1"
                    color="black"
                    name="See Product"
                    hover="hover:bg-[#000000]"
                    hoverColor="hover:text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboveFooterFlex />
    </div>
  );
}

export default App;
