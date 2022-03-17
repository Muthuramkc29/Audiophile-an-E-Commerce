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
import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
// import bgimg from "../../Images/image-header.jpg";

function App() {
  return (
    <div>
      <header
        className="bg-[#000000] text-[#FFFFFF] px-6 md:px-12 xl:px-40 header--mod"
        style={
          {
            // height: "515px",
            // backgroundImage: `url('${bgimg}')`,
          }
        }
      >
        <hr className="opacity-50"></hr>
        <div className="mt-24 flex flex-col justify-center items-center gap-6 text-center mx-auto lg:text-left max-w-sm md:mx-auto lg:items-start lg:mx-0">
          <p
            className="uppercase opacity-50 text-sm font-normal md:mt-6 lg:mt-6"
            style={{ letterSpacing: "10px" }}
          >
            New Product
          </p>
          <h1
            className="uppercase font-bold text-4xl"
            style={{ letterSpacing: "1.28571px" }}
          >
            XX99 Mark II HeadphoneS
          </h1>
          <p
            className="opacity-75 font-medium leading-6 mb-2 "
            style={{ fontSize: "15px" }}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button bgcolor="#D87D4A" color="white" />
        </div>
      </header>

      {/* Category Card Home */}

      <div className="px-6 md:px-12 xl:px-40 md:flex gap-3 justify-evenly">
        <CategoryCard img={headphone} name="headphones" to="/headphones" />
        <CategoryCard img={speaker} name="speakers" to="/speakers" />
        <CategoryCard img={earphoneCategory} name="earphones" to="/earphones" />
      </div>

      {/* Products Section Home */}

      <section className="px-6 md:px-12 xl:px-40 mt-28 md:mt-24 lg:mt-12">
        <div className="flex flex-col justify-center items-center gap-7 ">
          <div
            className="rounded-md w-full bg-[#D87D4A] pt-16 pb-2"
            style={{ height: "650px" }}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-16">
              <div>
                <img
                  className="block lg:hidden"
                  src={imgspeaker}
                  alt="imgspeaker"
                  style={{ width: "159px", height: "175px" }}
                />
                <img
                  className="hidden lg:block"
                  src={imgspeakerdesktop}
                  alt="imgspeaker"
                  style={{ width: "374px", height: "446px" }}
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
                <Button bgcolor="#000000" color="white" />
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded-md md:hidden lg:hidden"
              src={imgspeakerzx7}
              alt="imgspeakerzx7"
            />
            <img
              className="rounded-md hidden md:block lg:hidden"
              src={imgspeakerzx7tablet}
              alt="imgspeakerzx7"
            />
            <img
              className="rounded-md hidden lg:block"
              style={{ width: "1240px" }}
              src={imgspeakerzx7desktop}
              alt="imgspeakerzx7"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-7 lg:flex-row lg:gap-9 md:gap-3">
            <div>
              <img
                className="rounded-md md:hidden lg:hidden"
                src={earphone}
                alt="earphones"
              />
              <img
                className="rounded-md hidden md:block lg:hidden h-52 md:h-80"
                style={{ width: "339px" }}
                src={earphonetablet}
                alt="earphones"
              />
              <img
                className="rounded-md hidden md:hidden lg:block h-52 md:h-80"
                style={{ width: "540px", height: "320px" }}
                src={earphonedesktop}
                alt="earphones"
              />
            </div>
            <div
              className="bg-[#F1F1F1] rounded-md flex h-52 md:h-80 flex-col justify-center pl-7 lg:hidden"
              style={{ width: "328px" }}
            >
              <div>
                <h1 className="mb-3" style={{ fontSize: "28px" }}>
                  YX1 EARPHONES
                </h1>
                <Button bgcolor="#F1F1F1" color="black" />
              </div>
            </div>
            <div
              className="bg-[#F1F1F1] rounded-md lg:flex h-52 md:h-80 lg:flex-col lg:justify-center lg:items-center pl-7 hidden lg:block"
              style={{ width: "540px" }}
            >
              <div>
                <h1 className="mb-3" style={{ fontSize: "28px" }}>
                  YX1 EARPHONES
                </h1>
                <Button bgcolor="#F1F1F1" color="black" />
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
