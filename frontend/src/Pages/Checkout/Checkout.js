import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import SummaryItem from "../../Components/SummaryItem/SummaryItem";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setPaymentModal } from "../../redux/reducers/userReducers";
// import { Link } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(false);

  const total = JSON.parse(localStorage.getItem("totalAmount"));
  const grandTotal = parseInt(
    (total + 50 + (total * 18) / 100).toFixed(0)
  ).toLocaleString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(true);
  };

  return (
    <div className="bg-[#F2F2F2] px-6 md:px-12 xl:px-40">
      <p
        className="pt-6 pb-5 text-black opacity-50 cursor-pointer"
        style={{ fontSize: "15px" }}
        // onClick={() => {

        //   navigate(-1);
        // }}
      >
        {/* Go Back */}
      </p>
      <div className="pt-3 pb-12 lg:flex lg:gap-3 xl:gap-3 xl:flex xl:gap-4">
        <div className="bg-white px-5 py-4 rounded-md lg:w-4/6 xl:w-8/12">
          <form id="checkout-form" onSubmit={handleSubmit}>
            <h1 className="uppercase font-bold text-2xl ">Checkout</h1>
            <div className="pt-4">
              <p
                className="uppercase font-bold text-[#D87D4A] pt-3"
                style={{ fontSize: "13px", letterSpacing: "0.928571px" }}
              >
                Billing Details
              </p>
              <div className="lg:flex lg:flex-wrap lg:gap-3 xl:flex xl:gap-4 xl:flex-wrap my-4">
                <Input name="Name" placeholder="Alexei Ward" type="text" />
                <Input
                  name="Email Address"
                  placeholder="alexei@mail.com"
                  type="email"
                />
                <Input
                  name="Phone Number"
                  placeholder="+1 202-555-0136"
                  type="number"
                />
              </div>
            </div>
            <div className="pt-4">
              <p
                className="uppercase font-bold text-[#D87D4A] pt-3"
                style={{ fontSize: "13px", letterSpacing: "0.928571px" }}
              >
                Shipping info
              </p>
              <div className="lg:flex lg:flex-wrap lg:gap-3 xl:flex xl:gap-4 xl:flex-wrap my-4">
                <Input
                  name="Your Address"
                  placeholder="1137 Williams Avenue"
                  type="text"
                />
                <Input name="ZIP Code" placeholder="10001" type="number" />
                <Input name="City" placeholder="New York" type="text" />
                <Input name="Country" placeholder="United States" type="text" />
              </div>
            </div>
            <div>
              <p
                className="uppercase font-bold text-[#D87D4A] pt-3 pb-3"
                style={{ fontSize: "12px", letterSpacing: "0.928571px" }}
              >
                Payment Details
              </p>
              <p
                className="font-bold pt-2"
                style={{ fontSize: "13px", letterSpacing: "-0.214286px" }}
              >
                Payment Method
              </p>
              <div className="lg:flex lg:flex-wrap lg:gap-3 xl:flex xl:gap-4 xl:flex-wrap my-4">
                <Input
                  name="e-Money Number"
                  placeholder="238521993"
                  type="number"
                />
                <Input name="e-Money PIN" placeholder="6891" type="number" />
              </div>
            </div>
          </form>
        </div>
        <div className="py-6 pb-8 xl:w-4/12 lg:w-2/6 lg:py-0 xl:py-0">
          <div className="bg-white px-5 py-4 rounded-md">
            <h1 className="uppercase font-bold text-2xl ">Summary</h1>
            {grandTotal === "50" ? (
              <div
                className="flex flex-col justify-center items-center gap-5 py-5"
                onClick={() => {
                  navigate("/");
                }}
              >
                <iframe
                  title="random gif"
                  src="https://giphy.com/embed/nKERd2uhn8hhe"
                  width="240"
                  height="180"
                  // style="pointer-events: none; border: 0px;"
                ></iframe>
                <Button
                  bgcolor="#000000"
                  color="white"
                  name="Back to Purchase"
                  width="w-full"
                  hover="hover:bg-[#000000]"
                />
              </div>
            ) : (
              <div>
                <div className="py-4">
                  <SummaryItem />
                </div>
                <div className="flex justify-between items-center py-2">
                  <p
                    className="uppercase text-black opacity-50"
                    style={{ fontSize: "15px" }}
                  >
                    Total
                  </p>
                  <p
                    className="uppercase font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    $ {total.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <p
                    className="uppercase text-black opacity-50"
                    style={{ fontSize: "15px" }}
                  >
                    SHIPPING
                  </p>
                  <p
                    className="uppercase font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    $ 50
                  </p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <p
                    className="uppercase text-black opacity-50"
                    style={{ fontSize: "15px" }}
                  >
                    VAT (INCLUDED)
                  </p>
                  <p
                    className="uppercase font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    ${" "}
                    {parseInt(((total * 18) / 100).toFixed(0)).toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <p
                    className="uppercase text-black opacity-50"
                    style={{ fontSize: "15px" }}
                  >
                    Grand Total
                  </p>
                  <p
                    className="uppercase font-bold text-[#D87D4A]"
                    style={{ fontSize: "18px" }}
                  >
                    ${" "}
                    {parseInt(
                      (total + 50 + (total * 8) / 100).toFixed(0)
                    ).toLocaleString()}
                  </p>
                </div>
                <div
                  className="flex justify-center items-center py-5"
                  onClick={() => {
                    if (data === true) {
                      dispatch(setPaymentModal(true));
                    }
                  }}
                >
                  {/* <Button
                      bgcolor="#D87D4A"
                      color="white"
                      name="Continue & Pay"
                      width="w-full"
                      hover="hover:bg-[#fbaf85]"
                    /> */}
                  <button
                    className="bg-[#D87D4A] text-white hover:bg-[#fbaf85] w-full p-3"
                    form="checkout-form"
                    type="submit"
                  >
                    Continue & Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
