import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cake: 10,
};
const cakeSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cake = state.cake + action.payload;
    },
    remove: (state, action) => {
      state.cake = state.cake - action.payload;
    },
  },
});

export const { add, remove } = cakeSlice.actions;
export default cakeSlice.reducer;
