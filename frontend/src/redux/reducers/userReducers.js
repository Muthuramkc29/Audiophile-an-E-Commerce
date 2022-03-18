import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    navMenu: false,
    cartMenu: false,
  },
  reducers: {
    setNavMenu: (state, action) => {
      state.navMenu = !state.navMenu;
    },
    setCartMenu: (state, action) => {
      state.cartMenu = !state.cartMenu;
    },
  },
});

export const { setNavMenu, setCartMenu } = userSlice.actions;

export default userSlice.reducer;
