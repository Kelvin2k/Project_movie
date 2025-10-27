// command to create fast slice structure: rxslice
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
    removeUser: (state, action) => {
      // To delete: need an ID to know which user to delete.
      // Iterate through the array to find the element to delete and its position.
      // Use splice to delete it.
      // const index = state.arrUser.findIndex(
      //   (user) => user.id === action.payload.id
      // );
      // state.arrUser.splice(index, 1);

      // state.arrUser.splice((user) => user.id === action.payload.id, 1);
      // state.arrUser.splice(action.payload.index, 1);

      const index = state.arrUser.findIndex((item) => { //id = 5, action.payLoad = 5
        return item.id === action.payload.id;
      });
      if (index !== -1) {
        state.arrUser.splice(index, 1);
      }
    },
  },
});

export const { getValueUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
