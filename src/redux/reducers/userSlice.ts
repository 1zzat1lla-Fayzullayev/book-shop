import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    signin: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signup: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("user");
    },
  },
});

export const { signin, signup } = userSlice.actions;
export default userSlice.reducer;
