import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: { userBook: [] },
  reducers: {
    setUserBook: (state, action) => {
      state.userBook = action.payload;
    },
  },
});

export const { setUserBook } = bookSlice.actions;
export default bookSlice.reducer;
