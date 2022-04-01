import React from "react";
// import { useSelector } from "react-redux";
// import img1 from "../../../Images/image-gallery-1-mark2 (1).jpg";
// import img2 from "../../../Images/image-gallery-1-mark2 (2).jpg";
// import img3 from "../../../Images/image-gallery-1-mark2 (3).jpg";

// //Tablet

// import imgtab1 from "../../../Images/image-gallery-3 mark1 tablet (1).jpg";
// import imgtab2 from "../../../Images/image-gallery-3 mark1 tablet (2).jpg";
// import imgtab3 from "../../../Images/image-gallery-3 mark1 tablet (3).jpg";

// //Desktop

// import imgdesk1 from "../../../Images/image-gallery-3-mark1-desktop (1).jpg";
// import imgdesk2 from "../../../Images/image-gallery-3-mark1-desktop (2).jpg";
// import imgdesk3 from "../../../Images/image-gallery-3-mark1-desktop (3).jpg";

function ProductImageGrid({ product }) {
  // const product = useSelector((state) => state.user.individualProduct);

  return (
    <div>
      {/* {products.map((product, index) => ( */}
      {/* <div key={index}> */}
      <div className="md:flex md:justify-between md:items-center md:gap-3 mb-24">
        <div className="lg:w-2/4 h-full">
          <div>
            <img
              className="rounded-md w-full sm:my-4 md:hidden lg:hidden"
              src={product.productGridImage1Mob}
              alt="prod-grid1"
            />
            <img
              className="rounded-md w-full hidden md:block lg:hidden"
              src={product.productGridImage1Tab}
              alt="prod-grid1"
            />
            <img
              className="rounded-md w-full hidden md:hidden lg:block"
              src={product.productGridImage1Desktop}
              alt="prod-grid1"
            />
          </div>
          <div className="mt-4 xl:mt-6">
            <img
              className="rounded-md w-full sm:my-4 md:hidden lg:hidden"
              src={product.productGridImage2Mob}
              alt="prod-grid3"
            />
            <img
              className="rounded-md hidden md:block lg:hidden"
              src={product.productGridImage2Tab}
              alt="prod-grid3"
            />
            <img
              className="rounded-md w-full hidden md:hidden lg:block"
              src={product.productGridImage2Desktop}
              alt="prod-grid3"
            />
          </div>
        </div>
        <div className="lg:w-4/6 h-full">
          <div>
            <img
              className="rounded-md w-full my-4 lg:my-0 md:hidden lg:hidden"
              src={product.productGridImage3Mob}
              alt="prod-grid3"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full lg:my-0 hidden md:block lg:hidden"
              src={product.productGridImage3Tab}
              alt="prod-grid3"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full lg:my-0 h-full hidden md:hidden lg:block"
              src={product.productGridImage3Desktop}
              alt="prod-grid3"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
}

export default ProductImageGrid;
