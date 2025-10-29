// command to create fast slice structure: rxslice
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  arrUser: [],
  showError: "",
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

      // check if userID exists or not, if not userID will be added and will be notification sent to user
      const user = state.arrUser.find((item) => {
        return item.id === action.payload.id;
      });
      if (!user) {
        state.arrUser.push(action.payload);
        state.showError = "";
      } else {
        state.showError = "User exists in data";
      }
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

      const index = state.arrUser.findIndex((item) => {
        //id = 5, action.payLoad = 5
        return item.id === action.payload.id;
      });
      if (index !== -1) {
        state.arrUser.splice(index, 1);
      }
    },
    updateUser: (state, action) => {
      // To update a user: We need the user's ID to identify which user to modify.
      // console.log(action.payload);
      // const userId = action.payload.id;
      // console.log("userId", userId);
      // const { ...user } = action.payload;
      // console.log("user", user);
      // Iterate through the array to find the index of the element to update.
      // const index = state.arrUser.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // console.log("index", index);
      // Replace the old element's data with the new data from the action payload.
      // state.arrUser[index] = user;

      const index = state.arrUser.findIndex((item) => {
        return item.id === action.payload;
      });
      if (index !== -1) {
        state.arrUser[index] = action.payload;
      }
    },
  },
});

export const { getValueUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
