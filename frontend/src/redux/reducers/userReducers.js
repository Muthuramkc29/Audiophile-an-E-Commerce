import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    navMenu: false,
    cartMenu: false,
  },
  reducers: {
    setNavMenu: (state, action) => {
      state.navMenu = action.payload;
    },
    setCartMenu: (state, action) => {
      state.cartMenu = action.payload;
    },
  },
});

export const { setNavMenu, setCartMenu } = userSlice.actions;

export default userSlice.reducer;
