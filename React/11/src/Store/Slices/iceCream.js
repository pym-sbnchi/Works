import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iceCream: 10,
};
const iceCreamSlice = createSlice({
  name: "iceCreamSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      state.iceCream = state.iceCream + action.payload;
    },
    remove: (state, action) => {
      state.iceCream = state.iceCream - action.payload;
    },
  },
});

export const { add, remove } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
