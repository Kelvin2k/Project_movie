// command to create fast slice structure: rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrUser: [],
};

const userSlice = createSlice({
  name: "user",
  // initialState is default data of slice
  initialState,
  reducers: {
    // This is where you create functions to handle changes to the slice's state
    getValueUser: (state, action) => {
      console.log(state);
      // action is the object received from the component. It has two main properties:
      // - type: automatically generated based on the slice name and reducer function name
      // - payload: the data sent when dispatching the action from the component
      console.log(action);
      state.arrUser.push(action.payload);
    },
  },
});

export const { getValueUser } = userSlice.actions;

export default userSlice.reducer;
