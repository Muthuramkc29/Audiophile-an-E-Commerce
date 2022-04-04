import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    navMenu: false,
    cartMenu: false,
    paymentModal: false,
    products: [],
    cartProducts: [],
    individualProduct: [],
    totalAmount: 0,
    summaryItems: [],
  },
  reducers: {
    setNavMenu: (state, action) => {
      state.navMenu = action.payload;
    },
    setCartMenu: (state, action) => {
      state.cartMenu = action.payload;
    },
    setPaymentModal: (state, action) => {
      state.paymentModal = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
    setIndividualProduct: (state, action) => {
      state.individualProduct = action.payload;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    setSummaryItems: (state, action) => {
      state.summaryItems = action.payload;
    },
  },
});

export const {
  setNavMenu,
  setCartMenu,
  setPaymentModal,
  setProducts,
  setCartProducts,
  setIndividualProduct,
  setTotalAmount,
  setCount,
  setSummaryItems,
} = userSlice.actions;

export default userSlice.reducer;
