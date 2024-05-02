import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: null,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.emails = action.payload;
    },
  },
});

export const { addData } = emailSlice.actions;

export default emailSlice.reducer;
