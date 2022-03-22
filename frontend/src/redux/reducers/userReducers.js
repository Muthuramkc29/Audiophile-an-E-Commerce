import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    navMenu: false,
    cartMenu: false,
    paymentModal: false,
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
  },
});

export const { setNavMenu, setCartMenu, setPaymentModal } = userSlice.actions;

export default userSlice.reducer;
