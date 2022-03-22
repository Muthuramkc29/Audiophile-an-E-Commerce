import React from "react";
import img1 from "../../../Images/image-gallery-1-mark2 (1).jpg";
import img2 from "../../../Images/image-gallery-1-mark2 (2).jpg";
import img3 from "../../../Images/image-gallery-1-mark2 (3).jpg";

//Tablet

import imgtab1 from "../../../Images/image-gallery-3 mark1 tablet (1).jpg";
import imgtab2 from "../../../Images/image-gallery-3 mark1 tablet (2).jpg";
import imgtab3 from "../../../Images/image-gallery-3 mark1 tablet (3).jpg";

//Desktop

import imgdesk1 from "../../../Images/image-gallery-3-mark1-desktop (1).jpg";
import imgdesk2 from "../../../Images/image-gallery-3-mark1-desktop (2).jpg";
import imgdesk3 from "../../../Images/image-gallery-3-mark1-desktop (3).jpg";

function ProductImageGrid() {
  return (
    <div className="md:flex justify-center items-center md:gap-3 my-9">
      <div>
        <div>
          <img
            className="rounded-md sm:my-4 md:hidden lg:hidden"
            src={img1}
            alt="prod-grid1"
          />
          <img
            className="rounded-md sm:my-4 hidden md:block lg:hidden"
            src={imgtab1}
            alt="prod-grid1"
          />
          <img
            className="rounded-md sm:my-4 hidden md:hidden lg:block"
            src={imgdesk1}
            alt="prod-grid1"
          />
        </div>
        <div className="mt-4 xl:mt-6">
          <img
            className="rounded-md sm:my-4 md:hidden lg:hidden"
            src={img2}
            alt="prod-grid3"
          />
          <img
            className="rounded-md sm:my-4 hidden md:block lg:hidden"
            src={imgtab2}
            alt="prod-grid3"
          />
          <img
            className="rounded-md sm:my-4 hidden md:hidden lg:block"
            src={imgdesk2}
            alt="prod-grid3"
          />
        </div>
      </div>
      <div>
        <img
          className="rounded-md my-4 md:hidden lg:hidden"
          src={img3}
          alt="prod-grid3"
        />
        <img
          className="rounded-md my-4 hidden md:block lg:hidden"
          src={imgtab3}
          alt="prod-grid3"
        />
        <img
          className="rounded-md my-4 hidden md:hidden lg:block"
          src={imgdesk3}
          alt="prod-grid3"
        />
      </div>
    </div>
  );
}

export default ProductImageGrid;
