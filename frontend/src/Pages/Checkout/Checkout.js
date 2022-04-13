import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import SummaryItem from "../../Components/SummaryItem/SummaryItem";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setPaymentModal } from "../../redux/reducers/userReducers";
// import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const total = JSON.parse(localStorage.getItem("totalAmount"));
  const grandTotal = parseInt(
    (total + 50 + (total * 18) / 100).toFixed(0)
  ).toLocaleString();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setPaymentModal(true));
  };

  console.log(watch());

  console.log(errors);

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
          <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="uppercase font-bold text-2xl ">Checkout</h1>
            <div className="pt-4">
              <p
                className="uppercase font-bold text-[#D87D4A] pt-3"
                style={{ fontSize: "13px", letterSpacing: "0.928571px" }}
              >
                Billing Details
              </p>
              <div className="lg:flex lg:flex-wrap lg:gap-3 xl:flex xl:gap-4 xl:flex-wrap my-4">
                <div>
                  <Input
                    name="Name"
                    placeholder="Alexei Ward"
                    type="text"
                    formInputValue="name"
                    register={register}
                    rules={{
                      required: "Name is required!",
                      minLength: {
                        value: 4,
                        message: "Name should contain atleast 4 characters!",
                      },
                    }}
                    outline={
                      errors.name ? "outline-[#CD2C2C]" : "outline-[#D87D4A]"
                    }
                    // errorText={errors.name?.message}
                    error={errors}
                  />
                  {errors.name ? (
                    <p className="text-xs text-red-700 mb-2 ml-1">
                      {errors.name?.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Input
                    name="Email Address"
                    placeholder="alexei@mail.com"
                    type="email"
                    formInputValue="email"
                    register={register}
                    rules={{ required: "Email is required!" }}
                    outline={
                      errors.email ? "outline-[#CD2C2C]" : "outline-[#D87D4A]"
                    }
                    // errorText={errors.name?.message}
                    error={errors}
                  />
                  {errors.email ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.email?.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Input
                    name="Phone Number"
                    placeholder="+1 202-555-0136"
                    type="number"
                    formInputValue="phoneNumber"
                    register={register}
                    rules={{
                      required: "Phone Number is required!",
                      maxLength: {
                        value: 12,
                        message: "Phone Number cannot exceed 12 characters!",
                      },
                      minLength: {
                        value: 10,
                        message:
                          "Phone Number should contain atleast 10 characters!",
                      },
                    }}
                    outline={
                      errors.phoneNumber
                        ? "outline-[#CD2C2C]"
                        : "outline-[#D87D4A]"
                    }
                    error={errors}
                    // errorText={errors.name?.message}
                  />
                  {errors.phoneNumber ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.phoneNumber?.message}
                    </p>
                  ) : null}
                </div>
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
                <div>
                  <Input
                    name="Your Address"
                    placeholder="1137 Williams Avenue"
                    type="text"
                    formInputValue="address"
                    register={register}
                    rules={{
                      required: "Address is required!",
                      minLength: {
                        value: 10,
                        message:
                          "Address should contain atleast 10 characters!",
                      },
                    }}
                    outline={
                      errors.address ? "outline-[#CD2C2C]" : "outline-[#D87D4A]"
                    }
                    // errorText={errors.address?.message}
                    error={errors}
                  />
                  {errors.address ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.address?.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Input
                    name="ZIP Code"
                    placeholder="10001"
                    type="number"
                    outline={
                      errors.zipcode ? "outline-[#CD2C2C]" : "outline-[#D87D4A]"
                    }
                    formInputValue="zipcode"
                    register={register}
                    rules={{
                      required: "Zipcode is required!",
                      maxLength: {
                        value: 6,
                        message: "Zipcode cannot exceed 6 characters!",
                      },
                    }}
                    error={errors}
                  />
                  {errors.zipcode ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.zipcode?.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Input
                    name="City"
                    placeholder="New York"
                    type="text"
                    formInputValue="city"
                    register={register}
                    rules={{ required: "City is required!" }}
                    outline={
                      errors.city ? "outline-[#CD2C2C]" : "outline-[#D87D4A]"
                    }
                    error={errors}
                  />
                  {errors.city ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.city?.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Input
                    name="Country"
                    placeholder="United States"
                    type="text"
                    formInputValue="country"
                    outline={
                      errors.country ? "outline-[#CD2C2C]" : "outline-[#D87D4A]"
                    }
                    register={register}
                    rules={{ required: "Country is required!" }}
                    error={errors}
                  />
                  {errors.country ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.country?.message}
                    </p>
                  ) : null}
                </div>
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
                <div>
                  <Input
                    name="e-Money Number"
                    placeholder="238521993"
                    type="number"
                    outline={
                      errors.eMoneyNumber
                        ? "outline-[#CD2C2C]"
                        : "outline-[#D87D4A]"
                    }
                    formInputValue="eMoneyNumber"
                    register={register}
                    rules={{
                      required: "E-Money Number is required!",
                      maxLength: {
                        value: 9,
                        message: "E-Money Number cannot exceed 9 characters!",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "E-Money Pin should atleast contain 8 characters!",
                      },
                    }}
                    error={errors}
                  />
                  {errors.eMoneyNumber ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.eMoneyNumber?.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Input
                    name="e-Money PIN"
                    placeholder="6891"
                    type="number"
                    formInputValue="eMoneyPin"
                    register={register}
                    rules={{
                      required: "E-Money Pin is required!",
                      maxLength: {
                        value: 4,
                        message: "E-Money Pin cannot exceed 4 characters!",
                      },
                    }}
                    outline={
                      errors.eMoneyPin
                        ? "outline-[#CD2C2C]"
                        : "outline-[#D87D4A]"
                    }
                    error={errors}
                  />
                  {errors.eMoneyPin ? (
                    <p className="text-xs text-red-700 my-2 ml-1">
                      {errors.eMoneyPin?.message}
                    </p>
                  ) : null}
                </div>
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
